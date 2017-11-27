import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import '../assets/styles/App.scss';

import NavBar from './containers/NavBar'
import HomePage from './containers/HomePage'
import Resume from './containers/Resume'


const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={HomePage}/>
        <Route path='/resume' component={Resume}/>
      </Route>
    </Router>
  );
};

export default App;
