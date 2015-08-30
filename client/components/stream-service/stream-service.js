angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(container, stream) {
    console.log('stream is ' + stream);
    flowplayer(container, {
      plugins: {
        rtmp: {
           url: "http://releases.flowplayer.org/swf/flowplayer.rtmp-3.2.13.swf",
           failOverDelay: 4000
        }
      },
      clip: {
        live: true,
        sources: [
          {
            type: 'application/x-mpegurl',
            src: encodeURIComponent(stream)
          }
        ]
      },
      debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'
    });
  }
});
