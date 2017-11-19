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
            <Link className='navigation-link' to='/' ><button className={buttonClass} >ABOUT</button></Link>
            <Link className='navigation-link' to='/resume' ><button className={buttonClass} >RESUME</button></Link>
            <Link className='navigation-link' to='/projects' ><button className={buttonClass} >PROJECTS</button></Link>
          </div>
        </Headroom>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
