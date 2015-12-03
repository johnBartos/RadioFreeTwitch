'use strict';

var rp = require('request-promise');
var accessTokenController = require('./access-token.controller.js');

exports.get = function(req, res) {
  console.log('getting stream');

  var getStream = function (streamName, accessToken) {
    var options = getStreamOptions(streamName, accessToken);
    return rp(options)
      .then(function (body) {
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
      .catch(function(reason) {
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    };

    var streamName = req.params.streamName;

    accessTokenController(streamName)
      .then(function(token) {
        getStream(streamName, token);
      })
      .catch(function(reason) {
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
};

function getStreamOptions(streamName, access_token) {

  function getStreamUri (body) {
    var lines = body.split('\n');
    var stream = lines[lines.length-2];
    return 'api/stream-chunks/' + encodeURIComponent(stream);
  }

  return {
    uri: 'http://usher.twitch.tv/api/channel/hls/' + streamName + '.m3u8?player=twitchweb&&token='+  access_token.token + '&sig=' + access_token.sig +'&allow_audio_only=true&allow_source=true&type=any&p={123456}',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getStreamUri,
    timeout: 10000
  };
}
