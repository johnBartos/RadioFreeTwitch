(function(){'use strict';})();

angular.module('radioFreeTwitch')
.service('streamService', function streamService($http) {
  this.getStream = streamName => {
    return $http.get('api/audio-stream/' + streamName)
      .then(result => {
        return result.data;
      }, error => {
        console.log('ERROR ' + error);
      });
  };
});
