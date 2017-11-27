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
        <img id='profile-image' src='https://img2.cgtrader.com/items/131761/7bd20a367f/large/the-one-ring-3d-model-max.png'/>
      </div>
    )
  }
}

export default AboutMe;
