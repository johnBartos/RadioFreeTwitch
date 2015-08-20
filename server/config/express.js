'use strict';

var express = require('express');
var config = require('./environment');
var path = require('path');

module.exports = function(app){
  console.log(path.join(config.root, 'node_modules'));
  app.use(express.static(path.join(config.root, 'node_modules')));
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', '../client');
};
