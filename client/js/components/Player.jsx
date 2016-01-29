const React = require('react');
const PropTypes = React.PropTypes;

function buildClip(manifestUri) {
  return {
    sources: [
      {
        type: 'application/xmpegurl',
        src: manifestUri
      }
    ]
  };
}

function createPlayer(container, manifestUri) {
  return flowplayer(container, {
    autoplay: true,
    clip: buildClip(manifestUri)
  });
}

const Player = React.createClass({
  propTypes: {
    manifestUri: PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="player-container">AAAAAAAAAAA</div>
    );
  }
});

module.exports = Player;
