const React = require('react');
const PropTypes = React.PropTypes;
const Header = require('../components/Header.jsx');
const Searchbar = require('../components/Searchbar.jsx');

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
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
