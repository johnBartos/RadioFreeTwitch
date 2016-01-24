const React = require('react');

const headerStyle = {
  // backgroundColor: 'rgba(255, 255, 255, 1.0)',
  // backgroundColor: 'white',
  borderRadius: '0',
  color: '#000',
  marginBottom: '5em'
  // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

const Header = React.createClass({
  render: function renderNavbar() {
    return (
      <div className="col-xs-2" style={headerStyle}>
        <h1 className="display-4">stream <hr style= {{ backgroundColor: 'rgba(0, 0, 0, 1.0)' }}/></h1>
        <h1 className="display-4" style={{ paddingLeft: '1em' }}>rad.io</h1>
      </div>
    );
  }
});

module.exports = Header;
