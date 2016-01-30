import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

function buildClip(stream) {
  return {
    sources: [
      {
        type: 'application/x-mpegurl',
        src: stream
      }
    ]
  };
}

function createPlayer(container, manifestUri) {
  return flowplayer(container, {
    autoplay: true,
    clip: buildClip(manifestUri),
    debug: true
  });
}

const style = {
  width: '0',
  height: '0',
  visibility: 'hidden'
};

class Player extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    params: PropTypes.object.isRequired
  };

  componentWillMount() {
    fetch('/api/audio-stream/' + this.props.params.stream)
    .then(response => {
      response.text().then(data => {
        this.setState({ stream: data });
      });
    })
    .catch(reason => {
      console.log(reason);
    });
  }

  componentDidUpdate(nextProps, nextState) {
    if (!this.state.player && this.state.stream) {
      const player = createPlayer(ReactDom.findDOMNode(this), this.state.stream);
      console.log(player);
      this.setState({ player });
    }
  }

  render() {
    return (
      <div className="player-container stream fixed-controls" id="player" style={style}></div>
    );
  }
}

export default Player;
