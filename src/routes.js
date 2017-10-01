let genericRequestHandler = (type, tag) => {
    return `A ${type} joke, tagged - ${tag}`;
}

module.exports = app => {
    app.get('/', (req,res) => {
        res.send("Server Up!");
    })
    app.get('/one-liner', (req, res) => {
        return genericRequestHandler("one liner", "none");
    })
    app.get('/one-liner/:tag', (req, res) => {
        return genericRequestHandler("one liner", req.params.tag);        
    })
    app.get('/small', (req, res) => {
        return genericRequestHandler("small", "none");        
    })
    app.get('/small/:tag', (req, res) => {
        return genericRequestHandler("small", req.params.tag);        
    })
    app.get('/medium', (req, res) => {
        return genericRequestHandler("medium", "none");        
    })
    app.get('/medium/:tag', (req, res) => {
        return genericRequestHandler("medium", req.params.tag);        
    })
    app.get('/lengthy', (req, res) => {
        return genericRequestHandler("lengthy", "none");        
    })
    app.get('/lengthy/:tag', (req, res) => {
        return genericRequestHandler("lengthy", req.params.tag);        
    })
}