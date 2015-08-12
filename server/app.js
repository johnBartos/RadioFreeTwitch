'use strict'

var express = require('express');
var app = express();

require('./routes.js')(app);

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on ' + port + '...');

exports = module.exports = app;
