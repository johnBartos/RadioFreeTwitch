const React = require('react');
const PlayerActions = require('../actions/PlayerActions');
const ReactPropTypes = React.PropTypes;

const style = {
  color: '#4183D7',
  border: '1px solid black'
};

const Searchbar = React.createClass({
  getInitialState: () => {
    return {
      stream: ''
    };
  },
  render: function renderSearchbar() {
    return (
      <div className="row search-bar">
        <div className="col-xs-offset-3 col-xs-6">
         <div className="input-group">
           <input type="text" className="form-control" name="search-bar" placeholder='stream' value={this.state.stream} onChange={this._onChange} style={style}></input>
           <span className="input-group-btn">
             <button className="btn btn-secondary" type="submit" onClick={this.onPress} style={style}>Go!</button>
           </span>
         </div>
       </div>
      </div>
    );
  },
  _onChange: function onSearchChange(event) {
    this.setState({ stream: event.target.value });
  }
});

module.exports = Searchbar;
