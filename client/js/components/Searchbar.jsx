import React, { Component, PropTypes } from 'react';
import Router from 'react-router';

const style = {
  color: '#4183D7',
  border: '1px solid black'
};

class Searchbar extends Component {
  constructor(props, context) {
     super(props, context);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    stream: ''
  };

  _onChange = (event) => {
    this.setState({ stream: event.target.value });
  };

  _onClick = () => {
    const stream = '/radio/' + this.state.stream;
    console.log(this.context.router);
    this.context.router.transitionTo(stream, {});
  };

  render() {
    return (
      <div className="row search-bar">
        <div className="col-xs-offset-3 col-xs-6">
         <div className="input-group">
           <input type="text" className="form-control" name="search-bar" placeholder="twitch.tv/" value={this.state.stream} onChange={this._onChange} style={style}></input>
           <span className="input-group-btn">
             <button className="btn btn-secondary" type="submit" onClick={this._onClick} style={style}>go</button>
           </span>
         </div>
       </div>
      </div>
    );
  }
};

export default Searchbar
