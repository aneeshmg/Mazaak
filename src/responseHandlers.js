const ResponseModel = require('./models');
const DbPool = require('./db');

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

module.exports = {
    genericRequestHandler : genericRequestHandler,
    checkDB : checkDB
}