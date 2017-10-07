const express = require('express');
const config = require('./config');
const routerV1 = require('./routes-v1');
const routerV2 = require('./routes-v2');
const db = require('./db');

class Server {
    constructor() {
       this.app = express();
    }
    setRoutes() {
        this.app.get('/', (req, res) => {
            res.send("Server up!")
        })
        this.app.use('/v1', routerV1);
        this.app.use('/v2', routerV2);
    }
    start() {
        this.app.listen(process.env.PORT || config.port);
        this.setRoutes();
        console.log(`Server started at : ${new Date()} on port ${process.env.PORT || config.port}`)
        db.connectToDatabase().then(() => {
            console.log(`Now listening...`);
        })
    }
}

module.exports = new Server();