const express = require('express');
const config = require('./config');

class Server {
    constructor() {
       this.app = express();
    }
    setRoutes() {
        this.app.get('/', (req,res) => {
            res.send("Server Up!");
        }) 
        this.app.get('/welcome/:name', (req, res) => {
            let message = req.params.name;
            res.send(message);
        })
    }
    start() {
        this.app.listen(config.port);
        console.log(`Server running at : ${config.port}`);
    }
}

module.exports = new Server();