angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.isCollapsed = true;

    $scope.streamer = "";

    $scope.stream = "";
    $scope.getStream = function() {
      console.log($scope.streamer);
      $http.get('api/audio-stream/' + $scope.streamer)
        .then(function(result) {
            $scope.stream = result;
            $scope.isCollapsed = false;
            streamService.setup(angular.element(document.getElementById('player')), result.data);
            console.log(result);
        }, function(error){
            console.log(error);
        });
      }
  });
