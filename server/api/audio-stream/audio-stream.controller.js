'use strict'

var rp = require('request-promise');

var options = {
  uri : "https://api.twitch.tv/api/channels/arteezy/access_token",
  method: 'GET',
  headers: {'user-agent': 'node.js'}
}

exports.get = function(req,res) {
  console.log('Getting access token')
  rp(options)
    .then(function (body) {
      res.json(body);
    })
    .catch(function(reason) {
      console.log(reason);
    });
};
