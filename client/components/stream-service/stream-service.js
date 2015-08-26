angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    flowplayer(container, '../components/flowplayer/flowplayer-3.2.13.swf', {
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
