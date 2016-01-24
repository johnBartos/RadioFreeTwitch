const React = require('react');

const headerStyle = {
  borderRadius: '0',
  color: '#000',
  marginBottom: '10em'
};

const Header = React.createClass({
  render: function renderNavbar() {
    return (
      <div className="col-xs-2" style={headerStyle}>
        <h1 className="display-4">stream <hr style= {{ backgroundColor: '#4183D7' }}/></h1>
        <h1 className="display-4" style={{ paddingLeft: '1em' }}>rad.io</h1>
      </div>
    );
  }
});

module.exports = Header;
