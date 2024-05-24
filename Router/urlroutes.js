const express = require('express');

const router = express.Router();

const handleUrlShortner = require('../Controller/urlcontroller.js');

router.
    route('/').post(handleUrlShortner);

module.exports = router;