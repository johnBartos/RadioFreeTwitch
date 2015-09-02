'use strict'

var rp = require('request-promise');

function getChunkOptions(chunk) {
  return {
    uri : chunk,
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    timeout: 1000*5
  };
}

exports.get = function(req, res) {
  console.log('proxy get chunk');
  var chunk = decodeURIComponent(req.params.chunk);
  console.log(chunk);

  var getChunk = function (chunk) {

    var options = getChunkOptions(chunk);
    return rp(options)
    // .then(function (body) {
    //   // res.setHeader('Content-type', 'video/mp2t');
    //   // res.status(200).send(new Buffer(body));
    // })
    .pipe(res)
  };

  getChunk(chunk);
}
