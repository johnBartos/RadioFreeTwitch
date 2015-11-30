'use strict';

var rp = require('request-promise');

exports.get = function(req, res) {

  var getAccessToken = function (options, streamName) {
    return rp(options)
      .then(function (token) {
        token.name = streamName;
        res.status(200).send(token);
      })
      .catch(function (reason) {
        console.log(reason);
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    };

    var streamName = req.params.streamName;
    var options = getAccessTokenOptions(streamName);
    getAccessToken(options, streamName);
};

function getAccessTokenOptions(streamName)
{
  return {
    uri : 'https://api.twitch.tv/api/channels/' + streamName +'/access_token',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: parseAccessToken,
    timeout: 10000
  };
}

function parseAccessToken (body) {
  var parsedBody = JSON.parse(body);
  return {
    token : parsedBody.token,
    sig : parsedBody.sig,
  };
}
