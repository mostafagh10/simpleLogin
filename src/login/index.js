import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Login extends Component {

    state={
        username:'',
        password:''
    }

    handlevalue = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handlesubmit = (e) => {
        var x = this.state.username;
        var z = this.state.password;
        var y = document.getElementById("one");
        this.props.handleget("Welcome " + x)
        
    }


  render(){
  return (
    <div className="container">
    <div className="Login" id="logone">
        <h1>Log in</h1><br />
      <form>
      <input type="text" id="username" onChange={this.handlevalue} placeholder="username" />
      </form>
      <form><br />
      <input type="password" id="password" onChange={this.handlevalue} placeholder="password"/>
      </form><br />
      <Link to="/login"><button id="one" onClick={this.handlesubmit} disabled={!this.state.username || !this.state.password}>log in</button></Link>
    </div>
    </div>
  );
  }
}

export default Login;
