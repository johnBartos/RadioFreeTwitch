(function(){'use strict';})();

angular.module('radioFreeTwitch')
.factory('playerFactory', function () {

  return function(container) {

    var _player = setup('');

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
      play : function(manifestUrl) {
        console.log('loading clip ' + manifestUrl);
        _player.load(buildClip(manifestUrl));
        // setup(manifestUrl);
      },
      togglePause : function() {
        _player.paused ? _player.play() : _player.pause();
      },
    };
  };

});
