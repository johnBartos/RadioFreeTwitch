'use strict'

module.exports = function(app)
{
  app.use('/api/audio-stream', require('./api/audio-stream'));

  app.route('/*')
    .get(function(req, res){
        res.sendFile('index.html', {"root": app.get('appPath')});
    });
};
