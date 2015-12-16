'use strict';

const request = require('request');

const get = function proxyGetChunk(req, res) {
  function options(uri) {
    return {
      uri,
      method: 'GET',
      headers: { 'user-agent': 'node.js', 'Connection': 'close' },
      timeout: 1000,
      resolveWithFullResponse: true
    };
  }

  function getChunk(uri) {
    let gotError = false;
    const buf = [];

    return request(options(uri))
      .on('error', function onStreamError() {
        gotError = true;
        this.end();
      })
      .on('data', function onStreamChunk(streamChunk) {
        buf.push(streamChunk);
      })
      .on('end', function endStream() {
        if (gotError) {
          res.status(404).end();
          return;
        }

        this.end();
        res.status(200).send(Buffer.concat(buf));
      });
  }

  return (() => {
    getChunk(decodeURIComponent(req.params.chunk));
  })();
};

module.exports = {
  get: get
};
