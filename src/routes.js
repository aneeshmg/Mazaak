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
    console.log(db);

    db.collection('temp').aggregate([{$match: {value:"working"}},{$sample: { size: 1 }}]).toArray().then(data => {
        console.log(data)
        res.send(data)
    })
}

module.exports = (app) => {
    // TODO: allow for fetching N-jokes!
    app.get('/', (req,res) => {
        res.send("Server Up!");
    })
    app.get('/db-check', checkDB);
    app.get('/random', (req, res) => {
        res.send(genericRequestHandler("random", "random"));
    })
    app.get('/one-liner', (req, res) => {
        res.send(genericRequestHandler("one liner", "none"));
    })
    app.get('/one-liner/:tag', (req, res) => {
        res.send(genericRequestHandler("one liner", req.params.tag))   
    })
    app.get('/small', (req, res) => {
        res.send(genericRequestHandler("small", "none"));
    })
    app.get('/small/:tag', (req, res) => {
        res.send(genericRequestHandler("small", req.params.tag));
    })
    app.get('/medium', (req, res) => {
        res.send(genericRequestHandler("medium", "none"));
    })
    app.get('/medium/:tag', (req, res) => {
        res.send(genericRequestHandler("medium", req.params.tag))
    })
    app.get('/lengthy', (req, res) => {
        res.send(genericRequestHandler("lengthy", "none"))
    })
    app.get('/lengthy/:tag', (req, res) => {
        res.send(genericRequestHandler("lengthy", req.params.tag)) 
    })
}