import React, { Component } from 'react';
import { Link } from 'react-router';

import AboutMe from './AboutMe'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <div className='main-title'>
          <h1 id='about-me-greeting' >LUIGI LAKE</h1>
          <h2 id='about-me-title' >WEB DEVELOPER</h2>
        </div>
        <AboutMe />
      </div>
    )
  }
}

export default HomePage;
