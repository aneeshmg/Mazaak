const ResponseModel = require('./models');
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

let getRandomTag = () => {
    return allowedTags[Math.floor(Math.random() * allowedTags.length)];
}

let genericRequestHandler = (type, tag) => {
    let response = new ResponseModel();
    response.data = `A ${type} joke`;
    response.tags.push(tag);
    response.type = type;
    return response;
}

let checkDB = (req, res) => {
    const db = DbPool.getDb();

    db.collection('temp').aggregate([{$match: {value:"working"}},{$sample: { size: 1 }}]).toArray().then(data => {
        console.log(data)
        res.send(data)
    })
}

let getFromDB = (requestedType, tag) => {
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
        let response = {};
        dbResponse.map(o => {
            response.data = o.data,
            response.type = o.type,
            response.tags = o.tags
        })
        return Promise.resolve(response);
    })
}

let getSmallJoke = (req, res) => {
    
    if(req.params.tag) {
        getFromDB(availableTypes.SMALL, req.params.tag).then(data => res.json(data));
    }
    else {
        getFromDB(availableTypes.SMALL, getRandomTag()).then(data => res.json(data));
    }
}

module.exports = {
    genericRequestHandler : genericRequestHandler,
    checkDB : checkDB,
    getSmallJoke : getSmallJoke
}