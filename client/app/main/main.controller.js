angular.module('radioFreeTwitch')
  .controller('MainController', function($scope, $http, streamService) {

    $scope.isCollapsed = false;
    $scope.streamer = "";

    function getStream (streamer) {
      var stream = $http.get('api/audio-stream/' + streamer + '.m3u8')
        .then(function(result) {
            console.log('proxy url is ' + result.data);
            return result.data;
        }, function(error) {
            console.log('ERROR ' + error);
        });
      return stream;
    }

    $scope.play = function () {
        getStream($scope.streamer).then(function (stream){
        console.log('stream is ' + stream);
        $scope.player = streamService.setup(angular.element(document.getElementById('player')), stream);
      });
    }

    $scope.togglePlayer = function () {
        var player = $scope.player;
        console.log('player: ' + player);

        if(player.paused) {
          player.play();
        }
        else {
          player.pause();
        }
    }

    $scope.refreshPlayer = function () {
      getStream($scope.streamer).then(function (stream){
        var player = $scope.player;

        var newClip = {
          urlResolvers: null,
          live: true,
          sources: [
            {
              type: 'application/x-mpegurl',
              src: encodeURIComponent(stream)
            }
          ]
        };

        console.log('refreshing ' + newClip);
        player.load(newClip);
      });
    }


  });
