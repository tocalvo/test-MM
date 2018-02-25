/**
 * Express configuration
 */

'use strict';
const compression = require('compression'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override');

module.exports = function(app, config) {
    const env = config.env;

    app.use(compression());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json({
        limit: '1mb'
    }));
    app.use(cookieParser());
    app.use(methodOverride());

    if (env !== 'production') {
        app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    }
};