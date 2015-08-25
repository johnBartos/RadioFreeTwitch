angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    streamService.setup(angular.element(document.getElementById('player')))
    $scope.isCollapsed = true;

    $scope.streamer = "";

    $scope.stream = "";
    $scope.getStream = function() {
      console.log($scope.streamer);
      $http.get('api/audio-stream/' + $scope.streamer)
        .then(function(result) {
            $scope.stream = JSON.parse(result.data.body);
            $scope.isCollapsed = false;
            console.log(result);
        }, function(error){
            console.log(error);
        });
      }
  });
