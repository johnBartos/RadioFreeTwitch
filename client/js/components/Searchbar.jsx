const React = require('react');
const ReactPropTypes = React.PropTypes;

const Searchbar = React.createClass({
  getInitialState: () => {
    return {
      stream: 'stream name'
    };
  },
  render: function renderSearchbar() {
    return (
      <div className="row search-bar">
        <div className="col-xs-offset-2 col-xs-8">
         <div className="input-group">
           <input type="text" className="form-control" name="search-bar" value={this.state.stream} onChange={this._onChange}></input>
           <span className="input-group-btn">
             <button className="btn btn-secondary" type="submit" onClick={this.onPress}>Go!</button>
           </span>
         </div>
       </div>
      </div>
    );
  },
  _onChange: function onSearchChange(event) {
    this.setState({stream: event.target.value});
  }
});

module.exports = Searchbar;
