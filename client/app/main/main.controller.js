angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http) {
    console.log('main brain');

    $scope.streamer = "";

    $scope.doSomething = function() {
      console.log($scope.streamer);
      $http.get('api/audio-stream/' + $scope.streamer)
        .then(function(result) {
            console.log(result);
        }, function(error){
            console.log(error);
        });
      }
  });
