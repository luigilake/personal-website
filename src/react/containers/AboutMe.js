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
          <h1 id='about-me-greeting' >HI, I'M LUIGI LAKE</h1>
        </div>
        <h3>ABOUT ME SECTION</h3>
      </div>
    )
  }
}

export default AboutMe;
