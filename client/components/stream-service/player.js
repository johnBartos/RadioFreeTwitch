function Player() {

  this.buildClip = function (stream) {
    return {
        sources: [
          {
            type: 'application/x-mpegurl',
            src: stream
          }
        ]
    };
  };

}


Player.prototype.play = function(stream) {

};

Player.prototype.setup = function(playerContainer, stream) {
  var clip = buildClip(stream);

  var player = flowplayer(playerContainer, {
    autoplay: true,
    clip: streamClip
  });

  this.player = player;
};
