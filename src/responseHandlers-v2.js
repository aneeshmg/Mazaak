const DbPool = require('./db');

const welcome = (req, res) => {
    res.send('Welcome to Mazaak-v2');
}

module.exports = {
    welcome : welcome
}