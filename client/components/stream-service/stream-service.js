(function(){'use strict';})();

angular.module('radioFreeTwitch')
.service('streamService', function ($http) {

  this.getStream = function(streamName) {
    return $http.get('api/audio-stream/' + streamName + '.m3u8')
      .then(function(result) {
        return result.data;
      }, function(error) {
        console.log('ERROR ' + error);
      });
    };
});
