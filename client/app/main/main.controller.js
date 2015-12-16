(() => 'use strict')();

angular.module('radioFreeTwitch')
  .controller('MainController', function mainController($scope, $http, streamService, playerFactory) {

    $scope.stream = {};
    $scope.stream.streamName = '';

    const _player = playerFactory(document.getElementById('player'));

    const start = () => {
      streamService.getStream($scope.stream.streamName)
        .then((manifestUrl) => {
          _player.start(manifestUrl);
        }, (error) => {
          console.log('ERROR ' + error);
        });
    }

    $scope.stream.start = () => start();
    $scope.stream.refreshPlayer = () => start();
    $scope.stream.togglePause = () => _player.togglePause();
  });
