'use strict';

const controller = require('./stream-chunks.controller.js');
const router = require('express').Router();

router.get('/:stream', controller.get);

module.exports = router;
