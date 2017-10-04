const responseHandlers = require('./responseHandlers');

module.exports = (app) => {
    // TODO: allow for fetching N-jokes!
    app.get('/', (req,res) => {
        res.send("Server Up!");
    })
    app.get('/db-check', responseHandlers.checkDB);
    app.get('/random', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("random", "random"));
    })
    app.get('/one-liner', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("one liner", "none"));
    })
    app.get('/one-liner/:tag', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("one liner", req.params.tag))   
    })
    app.get('/small', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("small", "none"));
    })
    app.get('/small/:tag', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("small", req.params.tag));
    })
    app.get('/medium', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("medium", "none"));
    })
    app.get('/medium/:tag', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("medium", req.params.tag))
    })
    app.get('/lengthy', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("lengthy", "none"))
    })
    app.get('/lengthy/:tag', (req, res) => {
        res.send(responseHandlers.genericRequestHandler("lengthy", req.params.tag)) 
    })
}