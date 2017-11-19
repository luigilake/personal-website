import React, { Component } from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    let buttonClass = 'navigation-button'
    return(
      <div>
        <Headroom>
          <div className='navigation'>
            <button className={buttonClass} >ABOUT</button>
            <button className={buttonClass} >RESUME</button>
            <button className={buttonClass} >PROJECTS</button>
          </div>
        </Headroom>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
