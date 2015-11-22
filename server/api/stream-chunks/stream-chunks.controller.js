'use strict';

var rp = require('request-promise');
var proxy = "http://localhost/api/chunk-proxy/";

exports.get = function(req, res) {
  console.log('getting stream chunks');
  var stream = decodeURIComponent(req.params.stream);
  var server = stream.substring(0, stream.indexOf('py-index-live.m3u8'));

  var getChunks = function (stream) {
    var options = getChunksOptions(stream);

    return rp(options)
      .then( function (body) {
        body = prependServerUrlToChunks(body, proxy, server);
        res.status(200).send(body);
      })
      .catch( function (reason) {
        console.log(reason);
        res.status(400).json({
          success: false,
          reason: reason
        });

      });
  };
    getChunks(stream);
};

function prependServerUrlToChunks(body, proxy, server) {
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
