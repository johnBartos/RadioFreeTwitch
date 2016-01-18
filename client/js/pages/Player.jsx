const React = require('react');
const PropTypes = React.PropTypes;

const App = React.createClass({
  propTypes: {
    children: PropTypes.object
  },

  render: function renderApp() {
    return (
      <section className="App">
        <div className="container main">
          <h1 className="text-xs-center">HELLO CRUEL WORLD</h1>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
