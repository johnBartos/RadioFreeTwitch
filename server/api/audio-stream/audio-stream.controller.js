'use strict'

var request = require('request');

var options = {
  uri : "https://api.twitch.tv/api/channels/arteezy/access_token",
  method: 'GET',
  headers: {'user-agent': 'node.js'}
}

exports.get = function(req,res) {
  console.log('Getting access token')
  request(options, function (error, response, body) {
    console.log('Response from Twitch ' + response.statusCode);
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  })
};
