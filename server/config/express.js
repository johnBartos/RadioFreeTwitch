'use strict';

var express = require('express');
var config = require('./environment');
var path = require('path');

module.exports = function(app){
  app.use(express.static(path.join(config.root, 'client')));

  app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
  });

  console.log(path.join(config.root, 'client'));
  app.set('appPath', path.join(config.root, 'client'));

};
