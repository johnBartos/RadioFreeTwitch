angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.isCollapsed = true;

    $scope.streamer = "";

    $scope.stream = "";
    $scope.getStream = function() {
      console.log($scope.streamer);

      var stream = $http.get('api/audio-stream/' + $scope.streamer + '.m3u8')
        .then(function(result) {
            console.log('proxy url is' + result.data);
            $scope.isCollapsed = false;
            streamService.setup(angular.element(document.getElementById('player')), result.data);
        }, function(error) {
            console.log('ERROR ' + error);
        });
    }
  });
