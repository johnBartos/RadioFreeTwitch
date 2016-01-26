import rp from 'request-promise';

const getStream = (streamName) => {
  console.log('getting')
  // return rp({
  //   uri: 'http://localhost:4000/api/audio-stream/' + streamName,
  //   method: 'GET',
  //   headers: { 'user-agent': 'stream-radio' }
  // });
};

module.exports = {
  getStream
};
