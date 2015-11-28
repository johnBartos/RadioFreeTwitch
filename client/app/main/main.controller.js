(function(){'use strict';})();

angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService, playerFactory) {

    $scope.stream = {};
    $scope.stream.streamName = "";

    var _player = playerFactory(document.getElementById('player'));

    $scope.stream.play = function() {
      play();
    };

    $scope.stream.refreshPlayer = function () {
      play();
    };

    $scope.stream.togglePause = function () {
      _player.togglePause();
    };

    function play() {
      console.log('playing ' + $scope.stream.streamName);
      streamService.getStream($scope.stream.streamName)
        .then(function(manifestUrl) {
          _player.play(manifestUrl);
        }, function(error) {
          console.log('ERROR ' + error);
        });
    }

  });
