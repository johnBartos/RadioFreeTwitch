angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.isCollapsed = true;

    $scope.streamer = "";

    $scope.stream = "";
    $scope.getStream = function() {
      console.log($scope.streamer);

      var stream = $http.get('api/audio-stream/' + $scope.streamer)
        .then(function(result) {
            console.log(result.data);
            return result.data;
            // $scope.isCollapsed = false;
            // streamService.setup(angular.element(document.getElementById('player')), $scope.streamer);
        }, function(error) {
            console.log('ERROR ' + error);
        });

      var chunks = $http.get('api/stream-chunks/' + stream)
        .then( function(result) {
          console.log(result);
        }, function(error) {
          console.log('ERROR ' + error);
        });


      }
  });
