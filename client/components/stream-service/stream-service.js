angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(playerContainer, streamClip) {
    console.log('setup player');

    var player = flowplayer(playerContainer, {

      autoplay: true,

      clip: streamClip,

      // debug: true,
      swf: '../components/flowplayer/flowplayer-3.2.13.swf'

    });
    return player;
  };

  this.buildClip = function (stream) {

    return {
        urlResolvers: null,
        live: true,
        sources: [
          {
            type: 'application/x-mpegurl',
            src: encodeURIComponent(stream)
          }
        ],
        flashls: {
          debug: true,
          fragmentloadmaxretry: 0
        }
    }

  }

});
