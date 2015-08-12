'use strict'

module.exports = function(app)
{
  app.use('/api/audio-stream', require('./api/audio-stream'));
};
