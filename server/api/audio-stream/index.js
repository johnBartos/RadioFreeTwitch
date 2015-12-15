'use strict';

const controller = require('./audio-stream.controller.js');
const router = require('express').Router();

router.get('/:streamName', controller.get);

module.exports = router;
