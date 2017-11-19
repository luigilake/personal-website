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
        <h1>HI, I'M LUIGI LAKE</h1>
        <h3>ABOUT ME SECTION</h3>
      </div>
    )
  }
}

export default AboutMe;
