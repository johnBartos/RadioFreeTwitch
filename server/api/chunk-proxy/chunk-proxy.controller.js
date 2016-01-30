'use strict';

const request = require('request');

const options = (uri) => {
  return {
    uri,
    method: 'GET',
    headers: { 'user-agent': 'node.js', 'Connection': 'close' },
    timeout: 2000,
    resolveWithFullResponse: true
  };
};

const getChunk = (req, res) => {
  const chunkUri = decodeURIComponent(req.params.chunk);
  let gotError = false;
  const buf = [];

  request(options(chunkUri))
    .on('error', function onStreamError(error) {
      console.log(error);
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
};

module.exports = {
  getChunk
};
