import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
class Logout extends Component {
  render(){
  return (
    <div className="Logout" id="logoutone">
      <h1 className='logouttext'>{this.props.id}</h1><br />
      <Link to="/"><button className="two">Logout</button></Link>
    </div>
  );
  }
}

export default Logout;
