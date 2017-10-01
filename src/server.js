const express = require('express');
const config = require('./config');
const router = require('./routes');
const db = require('./db');

class Server {
    constructor() {
       this.app = express();
       router(this.app);
    }
    start() {
        this.app.listen(process.env.PORT || config.port);
        console.log(`Server started at : ${new Date()} on port ${process.env.PORT || config.port}`)
        db.connectToDatabase().then(() => {
            console.log(`Now listening...`);
        })
    }
}

module.exports = new Server();