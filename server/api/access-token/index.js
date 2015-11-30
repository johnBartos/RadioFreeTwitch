'use strict';

var router = require('express').Router();
var controller = require('./access-token.controller.js');

router.get('/:streamName', controller.get);

module.exports = router;
