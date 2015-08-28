'use strict'

var controller = require('./stream-chunks.controller.js');

var express = require('express');

router.get('/:streamUrl', controller.get);

module.exports = router;
