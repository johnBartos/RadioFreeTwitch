angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    flowplayer(container, {
      clip: {
        live: true,
        sources: [
          {
            type: 'application/x-mpegurl',
            src: 'http://srv6.zoeweb.tv:1935/z330-live/stream/playlist.m3u8'
          }
        ]
      },
      debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'
    });
  }
});
