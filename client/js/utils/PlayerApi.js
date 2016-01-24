const rp = require('request-promise');

const getStream = (streamName) => {
  return rp({
    uri: 'localhost:4000/api/audio-stream/' + streamName,
    method: 'GET',
    headers: { 'user-agent': 'stream-radio' }
  });
};

module.exports = {
  getStream
};
