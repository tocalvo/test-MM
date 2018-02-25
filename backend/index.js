'use strict';


const express = require('express'),
    config = require('./res/config.json'),
    http = require('http');


const app = express(),
    server = http.createServer(app);

require('./express')(app, config);
require('./routes/routes')(app);


function startServer() {
    server.listen(config.port, config.ip, () => {
        console.log('Express server listening on %d, in %s mode', config.port, config.env);
    });
}

process.on('uncaughtException', (err) => {
    console.log(err);
    // TODO: send to support 
});


setImmediate(startServer);

exports = module.exports = app;
