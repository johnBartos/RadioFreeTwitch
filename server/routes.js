'use strict';
const path = require('path');

const routes = (app) => {
  app.use('*/api/audio-stream', require('./api/audio-stream'));
  app.use('*/api/stream-manifest', require('./api/stream-manifest'));
  app.use('*/api/chunk-proxy', require('./api/chunk-proxy'));

  app.route('/crossdomain.xml')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/..', 'crossdomain.xml'));
    });

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/..', 'index.html'));
    });
};

module.exports = routes;
