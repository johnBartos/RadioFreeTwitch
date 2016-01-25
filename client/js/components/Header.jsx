const React = require('react');

const headerStyle = {
  borderRadius: '0',
  color: '#000',
  marginBottom: '6em',
  padding: '0'
};

const Header = React.createClass({
  render: function renderNavbar() {
    return (
      <div className="container-fluid" style={headerStyle}>
        <div className="col-xs-2">
          <h1 className="display-4">stream <hr style= {{ backgroundColor: '#4183D7' }}/></h1>
          <h1 className="display-4" style={{ paddingLeft: '1em' }}>rad.io</h1>
        </div>
        <div className="col-xs-10 text-xs-left">
        </div>
      </div>
    );
  }
});

module.exports = Header;
