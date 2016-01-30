'use strict';

const controller = require('./chunk-proxy.controller.js');
const router = require('express').Router();

router.get('/:chunk', controller.getChunk);

module.exports = router;
