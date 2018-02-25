'use strict';

const express = require('express'),
    controller = require('./phones.controller.js'),
    router = express.Router();

router.get('/', controller.get);

module.exports = router;