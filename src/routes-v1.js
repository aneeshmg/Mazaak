const responseHandlers = require('./responseHandlers-v1');
const router = require('express').Router();

router.get('/', responseHandlers.welcome);
router.get('/db-check', responseHandlers.checkDB);
router.get('/random', responseHandlers.welcome);
router.get('/one-liner', responseHandlers.getOneLinerJoke);
router.get('/one-liner/:tag', responseHandlers.getOneLinerJoke);
router.get('/small', responseHandlers.getSmallJoke);
router.get('/small/:tag', responseHandlers.getSmallJoke);
router.get('/medium', responseHandlers.getMediumJoke);
router.get('/medium/:tag', responseHandlers.getMediumJoke);
router.get('/lengthy', responseHandlers.getLengthyJoke);
router.get('/lengthy/:tag', responseHandlers.getLengthyJoke);

module.exports = router;