'use strict'

var request= require('request');
var rp = require('request-promise');


exports.get = function(req, res) {
  console.log('proxy get chunk');
  var chunk = decodeURIComponent(req.params.chunk);
  console.log(chunk);

  var buf = [];
  var gotError = false;

  var getChunk = function (chunk) {
    var options = getChunkOptions(chunk);

    return request(options)
    .on('error', function(reason) {
      console.log(reason);
      gotError = true;
      this.end();
      res.status(404).end();
      console.log('error encountered, closed stream');
    })
    .on('data',function(streamChunk) {
      console.log('got data');
      buf.push(streamChunk);
    })
    .on('end', function(body) {
      console.log('stream ended');
      this.end();

      if(gotError) {
        return;
      }
      var newRes = Buffer.concat(buf);
      res.status(200).send(newRes);
    });
  };
  getChunk(chunk);
  buf = [];
};

function getChunkOptions(chunk) {
  return {
    uri : chunk,
    method: 'GET',
    headers: {'user-agent': 'node.js', 'Connection' : 'close'},
    timeout: 200,
    resolveWithFullResponse: true
  };
}
