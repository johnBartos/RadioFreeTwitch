'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var app = express();

require('./routes.js')(app);
require('./config/express')(app);

app.listen(config.port);
console.log('Listening on ' + config.port + '...');

exports = module.exports = app;
