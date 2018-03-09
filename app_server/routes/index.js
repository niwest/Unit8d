var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/CBEN-402', ctrlLocations.seniorInfo);
router.get('/CBEN-403', ctrlLocations.processInfo);
router.get('/assignments', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
