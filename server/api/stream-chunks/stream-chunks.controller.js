'use strict';
const rp = require('request-promise');

const prependServerUrlToChunks = (body, serverUri) => {
  return body.split('\n').map((a) => {
    if (!a || a.length === 0) {
      return '';
    }
    if (a.charAt(0) !== '#') {
      return '/api/chunk-proxy/' + encodeURIComponent(serverUri + a);
    }
    return a;
  }).join('\n');
};

const options = streamUri => {
  return {
    uri: streamUri,
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
    timeout: 2000
  };
};

const getStreamManifest = (req, res) => {
  const stream = decodeURIComponent(req.params.stream);
  const server = stream.substring(0, stream.indexOf('py-index-live.m3u8'));

  rp(options(stream))
    .then(body => {
      res.status(200).send(prependServerUrlToChunks(body, server));
    })
    .catch(reason => {
      res.status(400).json(reason);
    });
};

module.exports = {
  getStreamManifest
};
