'use strict';

var rp = require('request-promise');

exports.get = function(req, res) {
  console.log('getting stream');

  var getStream = function (options, access_token) {
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
      .catch(function (reason) {
        res.status(400).json({
          success: false,
          reason: reason
        });
      });
    };

    var accessToken = req.params.accessToken;
    var options = getStreamOptions(accessToken);
    getStream(options);
};

function parseStream (body) {
  var lines = body.split('\n');
  var stream = lines[lines.length-2];
  return 'api/stream-chunks/' + encodeURIComponent(stream);
}

function getStreamOptions(access_token) {
  return {
    uri: 'http://usher.twitch.tv/api/channel/hls/' + access_token.name + '.m3u8?player=twitchweb&&token='+  access_token.token + '&sig=' + access_token.sig +'&allow_audio_only=true&allow_source=true&type=any&p={123456}',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: parseStream,
    timeout: 10000
  };
}
