'use strict';

const rp = require('request-promise');

const get = function getStreamChunks(req, res) {
  function prependServerUrlToChunks(body, serverUri) {
    return body.split('\n').map((a) => {
      if (!a || a.length === 0) {
        return '';
      }
      if (a.charAt(0) !== '#') {
        return 'http://localhost/api/chunk-proxy/' + encodeURIComponent(serverUri + a);
      }
      return a;
    }).join('\n');
  }

  function options(streamUri) {
    return {
      uri: streamUri,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
      timeout: 1000
    };
  }

  function getChunks(streamUri, serverUri) {
    return rp(options(streamUri))
      .then(body => {
        res.status(200).send(prependServerUrlToChunks(body, serverUri));
      })
      .catch(reason => {
        res.status(400).json({ success: false, reason });
      });
  }

  return (() => {
    const stream = decodeURIComponent(req.params.stream);
    const server = stream.substring(0, stream.indexOf('py-index-live.m3u8'));
    getChunks(stream, server);
  })();
};

module.exports = {
  get: get
};
