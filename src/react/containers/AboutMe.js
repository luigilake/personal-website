import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <div>
          <h1 id='about-me-greeting' >L U I G I   L A K E</h1>
          <h2 id='about-me-greeting' >W E B  D E V E L O P E R</h2>
        </div>
        <h3>ABOUT ME SECTION</h3>
      </div>
    )
  }
}

export default AboutMe;
