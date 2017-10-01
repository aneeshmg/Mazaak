const express = require('express');
const config = require('./config');
const router = require('./routes');

class Server {
    constructor() {
       this.app = express();
       router(this.app);
    }
    start() {
        this.app.listen(process.env.PORT || config.port);
        console.log(`Server running at : ${process.env.PORT || config.port}`);
    }
}

module.exports = new Server();