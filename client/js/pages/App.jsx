import React from 'react';
import Header from '../components/Header.jsx';
import Searchbar from '../components/Searchbar.jsx';
import { Link } from 'react-router';
const PropTypes = React.PropTypes;

const App = React.createClass({
  propTypes: {
    children: PropTypes.object
  },

  render: function renderApp() {
    return (
      <section className="App">
        <Header
         />
         <h2 className="display-0 text-xs-center" style={{ marginBottom: '1em' }}>listen to some <span style={{ color: '#4183D7' }}>twitch</span> streams</h2>
        <Searchbar
         />
         <Link to={"/radio/wew"}>LINK</Link>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
