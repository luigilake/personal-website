import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import '../assets/styles/App.scss';

import NavBar from './containers/NavBar'


const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
      </Route>
    </Router>
  );
};

export default App;
