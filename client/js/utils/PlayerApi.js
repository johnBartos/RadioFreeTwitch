import fetch from 'whatwg-fetch';

const getStream = (streamName) => {
  console.log('getting')
  // return rp({
  //   uri: 'http://localhost:4000/api/audio-stream/' + streamName,
  //   method: 'GET',
  //   headers: { 'user-agent': 'stream-radio' }
  // });

  return fetch('/api/audio-stream/' + streamName);
};

module.exports = {
  getStream
};
