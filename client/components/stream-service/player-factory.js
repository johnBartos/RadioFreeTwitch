(() => 'use strict')();

angular.module('radioFreeTwitch')
.factory('playerFactory', function playerFactory() {
  return function createPlayer(container) {
    function buildClip(uri) {
      return {
        sources: [
          {
            type: 'application/x-mpegurl',
            src: uri
          }
        ]
      };
    }

    function start(manifestUri) {
      const player = flowplayer(container, {
        autoplay: true,
        clip: buildClip(manifestUri)
      });

      return {
        togglePause: () => {
          if (player.paused) {
            player.play();
          }
          else {
            player.pause();
          }
        }
      };
    }

    return {
      start
    };
  };
});
