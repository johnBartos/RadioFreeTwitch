const React = require('react');

const navStyle = {
  backgroundColor: '#D91E18',
  borderRadius: '0',
  height: '300px'
};

const brandStyle = {
  color: 'white'
};

const Navbar = React.createClass({
  render: function renderNavbar() {
    return (
      <nav className="navbar navbar-light bg-faded" style={navStyle}>
        <a className="navbar-brand" href="#" style={brandStyle}>RFT</a>
      </nav>
    );
  }
});

module.exports = Navbar;
