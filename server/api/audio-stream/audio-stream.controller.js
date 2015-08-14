'use strict'

var rp = require('request-promise');

function parseBody(body)
{
  var parsedBody = JSON.parse(body);
  return {
    token : parsedBody.token,
    sig : parsedBody.sig,
  };
}

function make_access_token_options(req)
{
   return {
     uri : 'https://api.twitch.tv/api/channels/' + req.params.name +'/access_token',
     method: 'GET',
     headers: {'user-agent': 'node.js'},
     transform: parseBody
   };
}

function make_usher_options(access_token)
{
  return {
    uri: 'http://usher.twitch.tv/api/channel/hls/' + access_token.name + '.m3u8?player=twitchweb&&token='+  access_token.token + '&sig=' + access_token.sig + '&allow_audio_only=true&allow_source=true&type=any&p={123456}',
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  };
}

exports.get = function(req,res) {
  console.log('Getting access token');

  var loadAccessToken = function (req) {
    var options = make_access_token_options(req);
    return rp(options)
      .then(function (token) {
        console.log(token);
        token.name = req.params.name;
        return token;
      })
      .catch(function (reason) {
        console.log(reason);
      });
    }

    var sendUsherRequest = function (access_token) {
      var options = make_usher_options(access_token);
      return rp(options)
      .then(function (body) {
        res.json(body);
      })
      .catch(function (reason) {
        res.json(reason);
      });
    }

    loadAccessToken(req)
    .then(sendUsherRequest);
};
