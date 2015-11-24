(function(){'use strict';})();

angular.module('radioFreeTwitch')
.service('streamService', function () {

  var player = {};


  this.setup = function(playerContainer, stream) {
    var clip = buildClip(stream);

    var player = flowplayer(playerContainer, {
      autoplay: true,
      clip: streamClip
    });

    this.player = player;
  };

  this.play = function (playerContainer, streamName) {
    getStream(streamName)
      .then(function (stream){
        this.setup(playerContainer, buildClip(stream));
      });
  };

  this.refresh = function (streamName) {
    getStream(streamName)
      .then(function (stream){
        player.load(streamService.buildClip(stream));
      });
  };

  this.togglePlayPause = function () {
    if(player.paused) {
      player.play();
    }
    else {
      player.pause();
    }
  };

  function getStream (streamer) {
    return $http.get('api/audio-stream/' + streamer + '.m3u8')
      .then(function(result) {
        return result.data;
      }, function(error) {
        console.log('ERROR ' + error);
      });
  }

  function buildClip (stream) {
    return {
        sources: [
          {
            type: 'application/x-mpegurl',
            src: stream
          }
        ]
    };
  }

});
