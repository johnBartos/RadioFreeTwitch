function Stream(streamName) {
  this.streamName = streamName;
}

Stream.prototype.getManifest = function () {
  return $http.get('api/audio-stream/' + streamName + '.m3u8')
    .then(function(result) {
      return result.data;
    }, function(error) {
      console.log('ERROR ' + error);
    });
};
