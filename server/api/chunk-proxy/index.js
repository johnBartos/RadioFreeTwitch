'use strict'

var controller = require('./chunk-proxy.controller.js');

var express = require('express');
var router = express.Router();

router.get('/:chunk', controller.get);

module.exports = router;
