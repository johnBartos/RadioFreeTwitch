angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http) {

    $scope.isCollapsed = true;

    $scope.streamer = "";

    $scope.stream = "";
    $scope.getStream = function() {
      console.log($scope.streamer);
      $http.get('api/audio-stream/' + $scope.streamer)
        .then(function(result) {
            $scope.stream = result.data.body;
            $scope.isCollapsed = false;
            console.log(result);
        }, function(error){
            console.log(error);
        });
      }
  });
