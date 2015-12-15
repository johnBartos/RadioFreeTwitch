(function(){'use strict';})();

angular.module('radioFreeTwitch')
.factory('playerFactory', function () {

  return function(container) {
    function setup(manifestUrl) {
      flowplayer.conf.hlsjs = {
        debug: true,
        debug2: true
      };
      return flowplayer(container, {
        autoplay: true,
        clip: buildClip(manifestUrl)
      });
    }

    function buildClip(manifestUrl) {
      return {
        sources: [
          {
            type: 'application/x-mpegurl',
            src: manifestUrl + '.m3u8'
          }
        ]
      };
    }

    return {
      start: function(manifestUrl) {
        setup(manifestUrl);
      },
      togglePause: function() {
        _player.paused ? _player.play() : _player.pause();
      }
    };
  };
});
