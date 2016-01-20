const React = require('react');

const headerStyle = {
  backgroundColor: 'rgba(40, 0, 215, 0.9)',
  borderRadius: '0',
  color: '#FFF'
};

const Header = React.createClass({
  render: function renderNavbar() {
    return (
      <div className="jumbotron dotted" style={headerStyle}>
        <h1 className="display-4">Stream <hr style= {{ backgroundColor: 'white' }}/></h1>
        <h1 className="display-4" style={{ paddingLeft: '1em' }}>Radio</h1>
      </div>
    );
  }
});

module.exports = Header;
