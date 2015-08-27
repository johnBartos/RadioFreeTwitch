angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    flowplayer(container, {
      clip: {
        live: true,
        sources: [
          {
            type: 'application/x-mpegurl',
            src: 'http://localhost:3030/api/audio-stream/therealhandi'
          }
        ]
      },
      debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'
    });
  }
});
