(function(){'use strict';})();

angular.module('radioFreeTwitch')
.service('streamService', function ($http) {

  this.getStream = function(streamName) {
    return $http.get('api/audio-stream/' + streamName)
      .then(function(result) {
        return result.data;
      }, function(error) {
        console.log('ERROR ' + error);
      });
    };
});
