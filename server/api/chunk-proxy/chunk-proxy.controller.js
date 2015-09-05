'use strict'

var request= require('request');
var rp = require('request-promise');

function getChunkOptions(chunk) {
  return {
    uri : chunk,
    method: 'GET',
    headers: {'user-agent': 'node.js', 'Connection' : 'close'},
    timeout: 100,
    resolveWithFullResponse: true
  };
}

exports.get = function(req, res) {
  console.log('proxy get chunk');
  var chunk = decodeURIComponent(req.params.chunk);
  console.log(chunk);

  var buf = [];

  var getChunk = function (chunk) {
    var options = getChunkOptions(chunk);

    return request(options)
    .on('error', function(reason) {
      console.log(reason);
      res.end();
    })
    .on('timeout', function() {
      console.log('############# TIMEOUT ##############')
    })
    .on('data',function(streamChunk) {
      console.log('got data');
      buf.push(streamChunk);
    })
    .on('end', function(body) {
      console.log('pipe ended');
      var newRes = Buffer.concat(buf);
      res.status(200).send(newRes);
    });
  };

  getChunk(chunk);
}
