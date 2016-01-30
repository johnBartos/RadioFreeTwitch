import React from 'react';
import ReactDom from 'react-dom';
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

const style = {
  width: '200px',
  height: '200px'
};

const Player = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },
  componentWillMount() {
    fetch('/api/audio-stream/' + this.props.params.stream)
    .then(result => {
      console.log(result);
    })
    .catch(reason => {
      console.log(reason);
    });
  },
  componentDidMount() {
    const player = createPlayer(ReactDom.findDOMNode(this), this.props.manifestUri);
    console.log(player);
    this.setState({ player });
  },
  render() {
    return (
      <div className="player-container" style={style}>AAAAAAAAAAA</div>
    );
  }
});

module.exports = Player;
