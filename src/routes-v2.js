const responseHandlers = require('./responseHandlers-v2');
const router = require('express').Router();

router.get('/', responseHandlers.welcome);

module.exports = router;