const playerApi = require('../utils/PlayerApi');
const playerConstants = require('../constants/PlayerConstants');
const dispatcher = require('../AppDispatcher');

const getStream = (streamName) => {
  playerApi.getStream(streamName)
    .then(result => {

    })
    .catch(reason => {

    });
};

module.exports = {
  getStream
};
