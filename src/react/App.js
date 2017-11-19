import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import '../assets/styles/App.scss';

import NavBar from './containers/NavBar'
import AboutMe from './containers/AboutMe'
import Resume from './containers/Resume'


const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={AboutMe}/>
        <Route path='/resume' component={Resume}/>
      </Route>
    </Router>
  );
};

export default App;
