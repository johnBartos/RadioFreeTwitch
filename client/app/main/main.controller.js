(function(){'use strict';})();

angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.stream = {};
    $scope.stream.isCollapsed = false;
    $scope.stream.streamer = "";
    $scope.stream.volume = 0;
    $scope.stream.player = null;

    $scope.stream.play = function () {
        getStream($scope.stream.streamer).then(function (stream){
          console.log('stream is ' + stream);
          $scope.stream.player = streamService.setup(
            angular.element(document.getElementById('player')),
            streamService.buildClip(stream));
        });
    };

    $scope.stream.togglePlayer = function () {
        var player = $scope.stream.player;
        console.log('player: ' + player);

        if(player.paused) {
          player.play();
        }
        else {
          player.pause();
        }
    };

    $scope.stream.refreshPlayer = function () {
      getStream($scope.stream.streamer).then(function (stream){
        var player = $scope.stream.player;
        player.load(streamService.buildClip(stream));
      });
    };

    function getStream (streamer) {
      var streamUri = $http.get('api/audio-stream/' + streamer + '.m3u8')
      .then(function(result) {
        console.log('proxy url is ' + result.data);
        return result.data;
      }, function(error) {
        console.log('ERROR ' + error);
      });
      return streamUri;
    }

  });
