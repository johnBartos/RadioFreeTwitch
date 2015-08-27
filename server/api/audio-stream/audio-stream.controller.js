'use strict'

var rp = require('request-promise');

var fs = require('q-io/fs-mock');

function parseBody(body)
{
  var parsedBody = JSON.parse(body);
  return {
    token : parsedBody.token,
    sig : parsedBody.sig,
  };
}

function streamTransform (body)
{
  var lines = body.split('\n');
  var audio_stream = [lines[0], lines[17], lines[18], lines[19]].join('\n');
  return audio_stream;
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

function make_stream_options(access_token)
{
  return {
    uri: 'http://usher.twitch.tv/api/channel/hls/' + access_token.name + '.m3u8?player=twitchweb&&token='+  access_token.token + '&sig=' + access_token.sig + '&allow_audio_only=true&allow_source=true&type=any&p={123456}',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: streamTransform
  };
}

exports.get = function(req,res) {
  console.log('Getting access token');

  var loadAccessToken = function (req) {
    var options = make_access_token_options(req);
    return rp(options)
      .then(function (token) {
        //console.log(token);
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

    var sendStreamRequest = function (access_token) {
      var options = make_stream_options(access_token);
      return rp(options)
      .then(function (body) {
        res.setHeader('Content-type', 'application/vnd.apple.mpegurl');
        res.setHeader('Content-Disposition', 'attachment; filename=stream.m38u');
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

    loadAccessToken(req)
    .then(sendStreamRequest);
};
