import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className='about-me-div' >
        <hr className='about-me-divider'/>
        <img id='profile-image' src='https://78.media.tumblr.com/eddbda747edd043d0017c262b37dd82d/tumblr_p01xlg4Q8i1qh8hvwo1_540.jpg'/>
        <p className='about-me-content' >Hi, I'm Luigi Lake.</p>
      </div>
    )
  }
}

export default AboutMe;
