angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    flowplayer(container, {
      clip: {
        live: true,
        sources: [
          {
            type: 'video/webm',
            src: 'http://stream.flowplayer.org/drive.webm'
          }
        ]
      },
      debug: true,
    });
  }
});
