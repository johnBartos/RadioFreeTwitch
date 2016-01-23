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
        <div className="container-fluid nav" style={{ padding: '0' }}>
          <Header />
        </div>
        <Searchbar />
        <div className="container main">
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
