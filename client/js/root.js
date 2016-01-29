import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';
import App from './pages/App.jsx';
import Player from './pages/Player.jsx';
import * as History from 'history';

ReactDOM.render(
  <Router history={History.createHistory()}>
    <Route name="home" path="/" component={App}>
      <Route name="radio" path="/radio/:stream" component={Player} />
    </Route>
  </Router>,
  document.getElementById('root')
);
