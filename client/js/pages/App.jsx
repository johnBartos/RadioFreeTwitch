import React, { Component, PropTypes } from 'react';
import Header from '../components/Header.jsx';
import Searchbar from '../components/Searchbar.jsx';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    children: PropTypes.object
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
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
}

export default App;
