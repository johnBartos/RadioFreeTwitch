const React = require('react');
const PropTypes = React.PropTypes;
const Navbar = require('../components/Navbar.jsx');
const Header = require('../components/Header.jsx');

const App = React.createClass({
  propTypes: {
    children: PropTypes.object
  },

  render: function renderApp() {
    return (
      <section className="App">
        <div className="container-fluid nav">
          <Header />
        </div>
        <div className="container main">
          <p>hello</p>
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
