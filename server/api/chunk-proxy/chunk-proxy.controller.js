'use strict';

const request = require('request');

const get = function proxyGetChunk(req, res) {
  console.log('proxy get chunk');

  const streamChunk = decodeURIComponent(req.params.chunk);

  const options = () => {
    return {
      uri: streamChunk,
      method: 'GET',
      headers: { 'user-agent': 'node.js', 'Connection': 'close' },
      timeout: 1000,
      resolveWithFullResponse: true
    };
  };

  const getChunk = () => {
    let gotError = false;
    const buf = [];

    return request(options())
      .on('error', (reason) => {
        gotError = true;
        this.end();
        console.log('error encountered, closed stream ' + reason);
      })
      .on('data',function(streamChunk) {
        console.log('got data');
        buf.push(streamChunk);
      })
      .on('end', function(body) {
        console.log('stream ended');

        if (gotError) {
          res.status(404).end();
          return;
        }

        this.end();
        const newRes = Buffer.concat(buf);
        res.status(200).send(newRes);
      });
  };

  return (() => getChunk(streamChunk))();
};

module.exports = {
  get: get
};
