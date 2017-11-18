import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <div>
          NAVIGATION
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
