(function(){'use strict';})();

angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.stream = {};
    $scope.stream.isCollapsed = false;
    $scope.stream.streamer = "";
    $scope.stream.volume = 0;
    $scope.stream.player = null;

    $scope.stream.play = function () {
      var playerContainer = document.getElementById('player');
      streamSerice.play(playerContianer, $scope.stream.streamer);
    };

    $scope.stream.togglePlayState = function () {
      streamService.togglePlayPause();
    };

    $scope.stream.refreshPlayer = function () {
      streamService.refresh();
    };
    
  });
