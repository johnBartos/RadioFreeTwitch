angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container) {
    flowplayer(container, {
      clip: {
        sources: [
          {
            type: 'video/webm',
            src: 'http://stream.flowplayer.org/drive.webm'
          }
        ]
      }
    });
  }
});
