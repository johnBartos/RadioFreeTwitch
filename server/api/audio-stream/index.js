'use strict'

var controller = require('./audio-stream.controller.js');

var express = require('express');
var router = express.Router();

router.get('/', controller.get);

module.exports = router;
