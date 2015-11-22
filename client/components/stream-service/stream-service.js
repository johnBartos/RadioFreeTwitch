(function(){'use strict';})();

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
        sources: [
          {
            type: 'application/x-mpegurl',
            src: stream
          }
        ]
    };
  };
});
