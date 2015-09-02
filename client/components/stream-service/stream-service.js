angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(playerContainer, stream) {
    console.log('stream is ' + stream);

    var player = flowplayer(playerContainer, {

      autoplay: true,

      clip: {
        urlResolvers: null,
        live: true,
        sources: [
          {
            type: 'application/x-mpegurl',
            src: encodeURIComponent(stream),

          }
        ]
      },

      debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'

    });

    return player;
  }
});
