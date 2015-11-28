(function(){'use strict';})();

angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService, playerFactory) {

    $scope.stream = {};
    $scope.stream.streamName = "";

    var _player = playerFactory(document.getElementById('player'));

    $scope.stream.start = function() {
      start();
    };

    $scope.stream.refreshPlayer = function () {
      start();
    };

    $scope.stream.togglePause = function () {
      _player.togglePause();
    };

    function start() {
      console.log('playing ' + $scope.stream.streamName);
      streamService.getStream($scope.stream.streamName)
        .then(function(manifestUrl) {
          _player.start(manifestUrl);
        }, function(error) {
          console.log('ERROR ' + error);
        });
    }

  });
