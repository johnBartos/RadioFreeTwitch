(function(){'use strict';})();

angular.module('radioFreeTwitch')
.factory('playerFactory', function () {

  return function(container) {

    function setup(manifestUrl) {
      return flowplayer(container, {
        autoplay: true,
        clip : buildClip(manifestUrl)
      });
    }

    function buildClip(manifestUrl) {
        return  {
          sources: [
            {
              type: 'application/x-mpegurl',
              src: manifestUrl
            }
        ]
      };
    }

    return {
      start : function(manifestUrl) {
        setup(manifestUrl);
      },
      togglePause : function() {
        _player.paused ? _player.play() : _player.pause();
      },
    };
  };

});
