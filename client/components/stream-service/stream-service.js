angular.module('radioFreeTwitch')
.service('streamService', function () {

  this.setup = function(playerContainer, streamClip) {
    console.log('setup player');

    var player = flowplayer(playerContainer, {
      autoplay: true,
      clip: streamClip
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
          debug2: true
          // fragmentloadmaxretry: 0,
          // manifestloadmaxretry: 0,
          // minbufferlength: 0
        }
    }
  }

});
