const ResponseModel = require('./models').ResponseModel;
const DbPool = require('./db');

const allowedTags = ["popular", "animal", "blonde", "clean", 
    "dirty", "family", "food", "insult", "misc", "office", "racist", "sports", "tech", 
    "music", "love", "work", "marriage", "cats", "dogs", "cars", "life", "sms"
];
const availableTypes = {
    ONE_LINER: "one-liner",
    SMALL: "small",
    MEDIUM: "medium",
    LENGTHY: "lengthy"
};

const getRandomTag = () => {
    return allowedTags[Math.floor(Math.random() * allowedTags.length)];
}

const getRandomType = () => {
    switch(Math.floor(Math.random() * 4)) {
        case 0: return availableTypes.ONE_LINER;
        case 1: return availableTypes.SMALL;
        case 2: return availableTypes.MEDIUM;
        case 3: return availableTypes.LENGTHY;
    }
}

const welcome = (req, res) => {
    res.send('Welcome to Mazaak-v1');
}

const random = (req, res) => {

    getFromDB(getRandomType(), getRandomTag()).then(data => res.json(data));
}

const getOneLinerJoke = (req, res) => {
    
    if(req.params.tag) {
        getFromDB(availableTypes.ONE_LINER, req.params.tag).then(data => res.json(data));
    }
    else {
        getFromDB(availableTypes.ONE_LINER, null).then(data => res.json(data));
    }
}

const getSmallJoke = (req, res) => {
    
    if(req.params.tag) {
        getFromDB(availableTypes.SMALL, req.params.tag).then(data => res.json(data));
    }
    else {
        getFromDB(availableTypes.SMALL, null).then(data => res.json(data));
    }
}

const getMediumJoke = (req, res) => {
    
    if(req.params.tag) {
        getFromDB(availableTypes.MEDIUM, req.params.tag).then(data => res.json(data));
    }
    else {
        getFromDB(availableTypes.MEDIUM, null).then(data => res.json(data));
    }
}

const getLengthyJoke = (req, res) => {
    
    if(req.params.tag) {
        getFromDB(availableTypes.LENGTHY, req.params.tag).then(data => res.json(data));
    }
    else {
        getFromDB(availableTypes.LENGTHY, null).then(data => res.json(data));
    }
}

const getFromDB = (requestedType, tag) => {
    tag = tag || getRandomTag();
    const db = DbPool.getDb();

    return db.collection('jokesDB').aggregate([{$match: 
        {
            type: requestedType,
            tags: tag
        }
    },{
        $sample: { 
            size: 1 
        }
    }]).toArray()
    .then(dbResponse => {
        let response = new ResponseModel();
        dbResponse.map(o => {
            response.data = o.data,
            response.type = o.type,
            response.tags = o.tags
        })
        return Promise.resolve(response);
    })
}

module.exports = {
    welcome : welcome,
    random : random,
    getOneLinerJoke : getOneLinerJoke,
    getSmallJoke : getSmallJoke,
    getMediumJoke : getMediumJoke,
    getLengthyJoke : getLengthyJoke
}