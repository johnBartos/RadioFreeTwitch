var player = function player(manifestUri) {

  var buildClip = function (streamName) {
      return  {
        sources: [
          {
            type: 'application/x-mpegurl',
            src: stream
          }
      ]
    };
  };

  var setup = function(playerContainer, manifest) {
    var manifestClip = buildClip(manifest);
    var player = flowplayer(playerContainer, {
      autoplay: true,
      clip: manifestClip
    });
  };

};
