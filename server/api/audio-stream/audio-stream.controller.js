'use strict'

var rp = require('request-promise');

exports.get = function(req,res) {
  console.log('Getting access token');

  var getAccessToken = function (req) {
    console.log('loadAccessToken');
    var options = getAccessTokenOptions(req);
    return rp(options)
      .then(function (token) {
        console.log(token);
        token.name = req.params.name;
        return token;
      })
      .catch(function (reason) {
        console.log(reason);
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    }

    var getStream = function (access_token) {
      console.log('sendStreamRequest');
      var options = getStreamOptions(access_token);
      console.log(options.uri);
      return rp(options)
      .then(function (body) {
        console.log(body);

        if(typeof body == 'undefined') {
          res.status(400).json({
            success: false,
            reason: 'Stream was undefined'
          });
          return;
        }
        res.setHeader('Content-type', 'application/vnd.apple.mpegurl');
        res.status(200).send(body);
      })
      .catch(function (reason) {
        console.log(reason);
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    }

    getAccessToken(req)
    .then(getStream);
};

function parseAccessToken (body) {
  var parsedBody = JSON.parse(body);
  return {
    token : parsedBody.token,
    sig : parsedBody.sig,
  };
}

function parseStream (body) {
  console.log('pre-split-body ' + body);
  var lines = body.split('\n');
  var stream = lines[lines.length-2];

  return 'api/stream-chunks/' + encodeURIComponent(stream);
}

function getAccessTokenOptions(req)
{
  return {
    uri : 'https://api.twitch.tv/api/channels/' + req.params.name +'/access_token',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: parseAccessToken,
    timeout: 10000
  };
}

function getStreamOptions(access_token)
{
  return {
    uri: 'http://usher.twitch.tv/api/channel/hls/' + access_token.name + '.m3u8?player=twitchweb&&token='+  access_token.token + '&sig=' + access_token.sig +'&allow_audio_only=true&allow_source=true&type=any&p={123456}',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: parseStream,
    timeout: 10000
  };
}
