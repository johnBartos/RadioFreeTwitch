'use strict';

const rp = require('request-promise');

const get = function getStreamChunks(req, res) {
  console.log('getting stream chunks');


  const stream = decodeURIComponent(req.params.stream.slice(0, req.params.stream.length - 5));
  const server = stream.substring(0, stream.indexOf('py-index-live.m3u8'));

  const prependServerUrlToChunks = (body) => {
    return body.split('\n').map((a) => {
      if (!a || a.length === 0) {
        return '';
      }
      if (a.charAt(0) !== '#') {
        return 'http://localhost/api/chunk-proxy/' + encodeURIComponent(server + a);
      }
    }).join('\n');
  };

  const getChunksOptions = () => {
    return {
      uri: stream,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
      timeout: 1000
    };
  };

  const getChunks = () => {
    return rp(getChunksOptions(stream))
      .then((body) => {
        res.status(200).send(prependServerUrlToChunks(body, server));
      })
      .catch((reason) => {
        res.status(400).json({ success: false, reason });
      });
  };

  return (() => getChunks(stream, server))();
};

module.exports = {
  get: get
};
