'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var app = express();

require('./config/express')(app);
require('./routes.js')(app);

app.listen(config.port);
console.log('Listening on ' + config.port + ' in ' + app.get('env') + ' mode...');

exports = module.exports = app;
