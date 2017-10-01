let genericRequestHandler = (type, tag) => {
    return `A ${type} joke, tagged - ${tag}`;
}

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send("Server Up!");
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