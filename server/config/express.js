'use strict';

var express = require('express');
var config = require('./environment');
var path = require('path');

module.exports = function(app){
  app.use(express.static(path.join(config.root, 'client')));
  // app.set('appPath', '../client');
  console.log(path.join(config.root, 'client'));
  app.set('appPath', path.join(config.root, 'client'));

};
