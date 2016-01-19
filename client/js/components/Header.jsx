const React = require('react');

const headerStyle = {
  backgroundColor: '#D91E18',
  borderRadius: '0',
  height: '300px',
  color: '#FFF'
};

const Header = React.createClass({
  render: function renderNavbar() {
    return (
      <div className="jumbotron" style={headerStyle}>
        <h1 class="display-4">RadioFreeTwitch</h1>
      </div>
    );
  }
});

module.exports = Header;
