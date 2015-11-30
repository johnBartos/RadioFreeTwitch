'use strict';

var rp = require('request-promise');

exports.get = function(req, res) {
  console.log('getting stream chunks');

  var getChunks = function (stream, server) {
    var options = getChunksOptions(stream);

    return rp(options)
      .then(function (body) {
        body = prependServerUrlToChunks(body, server);
        res.status(200).send(body);
      })
      .catch(function (reason) {
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    };

  var stream = decodeURIComponent(req.params.stream);
  var server = stream.substring(0, stream.indexOf('py-index-live.m3u8'));
  getChunks(stream, server);
};

function prependServerUrlToChunks(body, server) {
  var proxy = "http://localhost/api/chunk-proxy/";

  return body.split('\n').map(function(a) {
    if (!a || a.length === 0) {
      return '';
    }
    if(a.charAt(0) != '#'){
      return proxy + encodeURIComponent(server + a);
    }
    else {
      return a;
    }
  }).join("\n");
}

function getChunksOptions (stream) {
  return {
    uri: stream,
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    timeout: 1000
  };
}
