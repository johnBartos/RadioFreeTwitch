'use strict';

const rp = require('request-promise');
console.log('getting access token');
const get = function getAccessToken(streamName) {
  const options = () => {
    const parseAccessToken = (body) => {
      const parsedBody = JSON.parse(body);
      return {
        token: parsedBody.token,
        sig: parsedBody.sig
      };
    };

    return {
      uri: 'https://api.twitch.tv/api/channels/' + streamName + '/access_token',
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
      transform: parseAccessToken,
      timeout: 10000
    };
  };

  return (() => {
    return rp(options(streamName));
  })();
};

module.exports = {
  get: get
};
