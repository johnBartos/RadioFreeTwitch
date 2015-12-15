'use strict';

const rp = require('request-promise');
const accessTokenController = require('./access-token.controller.js');

const get = function getAudioStream(req, res) {
  console.log('getting audio stream');
  const streamName = req.params.streamName;

  const options = (accessToken) => {
    const getStreamUri = (body) => {
      const lines = body.split('\n');
      return 'api/stream-chunks/' + encodeURIComponent(lines[lines.length - 2]);
    };

    return {
      uri: 'http://usher.twitch.tv/api/channel/hls/' + streamName + '.m3u8?player=twitchweb&&token=' + accessToken.token + '&sig=' + accessToken.sig + '&allow_audio_only=true&allow_source=true&type=any&p={123456}',
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
      transform: getStreamUri,
      timeout: 10000
    };
  };

  const getStream = (accessToken) => {
    return rp(options(accessToken))
      .then((body) => {
        if (typeof body === 'undefined') {
          res.status(400).json({ success: false, reason: 'Stream was undefined' });
          return;
        }
        res.setHeader('Content-type', 'application/vnd.apple.mpegurl');
        res.status(200).send(body);
      })
      .catch((reason) => {
        res.status(400).json({ success: false, reason });
      });
  };

  return (() => {
    accessTokenController.get(streamName)
    .then((token) => {
      getStream(token);
    })
    .catch((reason) => {
      res.status(400).json({ success: false, reason });
    });
  })();
};

module.exports = {
  get: get
};
