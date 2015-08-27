angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    flowplayer(container, {
      plugins: {
        rtmp: {
           url: "http://releases.flowplayer.org/swf/flowplayer.rtmp-3.2.13.swf",
           failOverDelay: 4000
        },
        flashls: {
            url: '../components/flowplayer/flashlsFlowPlayer.swf'
        }
      },
      clip: {
        url: 'http://localhost/api/audio-stream/magic.m3u8',
        live: true,
        provider: "flashls",
        urlResolvers: "flashls",
        sources: [
          {
            type: 'application/x-mpegurl',
            src: 'http://localhost/api/audio-stream/magic.m3u8'
          }
        ]
      },
      debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'
    });
  }
});
