'use strict';

var rp = require('request-promise');

exports.get = function(streamName) {
  console.log('Getting access token');
  var options = getAccessTokenOptions(streamName);
  return rp(options);
};

function getAccessTokenOptions(streamName)
{
  function parseAccessToken (body) {
    var parsedBody = JSON.parse(body);
    return {
      token : parsedBody.token,
      sig : parsedBody.sig,
    };
  }

  return {
    uri : 'https://api.twitch.tv/api/channels/' + streamName +'/access_token',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: parseAccessToken,
    timeout: 10000
  };
}
