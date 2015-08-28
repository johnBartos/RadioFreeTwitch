'use strict'

var rp = require('request-promise');


function prependServerUrlToChunks(body, server) {
  body = body.split('\n').map(function(a) {
    if(a.charAt(0) != '#'){
      return server + a;
    }
    else {
      return a;
    }
  }).join("\n");
}

function getChunksOptions (streamUrl) {
  return {
    uri: streamUrl,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
    }
}

exports.get = function(req, res) {
  console.log('getting stream chunks');

  var getChunks = function (streamUrl) {

    var options =
  }
};
