'use strict'

var rp = require('request-promise');

function getChunkOptions(chunk) {
  return {
    uri : chunk,
    method: 'GET',
    headers: {'user-agent': 'node.js', 'Connection' : 'close'},
    timeout: 50
  };
}

exports.get = function(req, res) {
  console.log('proxy get chunk');
  var chunk = decodeURIComponent(req.params.chunk);
  console.log(chunk);

  req.socket.setTimeout(50);

  var getChunk = function (chunk) {
    var options = getChunkOptions(chunk);
    return rp(options)
    .on('error', function(reason) {
      console.log(reason);
      res.end();
    })
    .pipe(res)
  };

  getChunk(chunk);
}
