(function(){'use strict';})();

angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService, playerFactory) {

    $scope.stream = {};
    $scope.stream.streamName = '';

    const _player = playerFactory(document.getElementById('player'));

    const start = () => {
      console.log('playing ' + $scope.stream.streamName);
      streamService.getStream($scope.stream.streamName)
        .then((manifestUrl) => {
          _player.start(manifestUrl);
        }, (error) => {
          console.log('ERROR ' + error);
        });
    }

    $scope.stream.start = function() {
      start();
    };

    $scope.stream.refreshPlayer = function() {
      start();
    };

    $scope.stream.togglePause = function() {
      _player.togglePause();
    };
  });
