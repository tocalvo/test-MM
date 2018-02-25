/**
 * Main application routes
 */

'use strict';

var express = require('express'),
    router = express.Router();


module.exports = function(app) {
    router.use('/phones', require('./phones/index'));

    //added prefix on that module
    app.use('/v1', router);
};