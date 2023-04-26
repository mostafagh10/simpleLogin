import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './login/index'
import Logout from './logout/index'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  state = {
    username1 : ''
  }

  handleget = (z) => {
    this.setState({
      username1 : z
    });
  }

  render(){
  return (
    <div className="App">
      <BrowserRouter>
  <Route path="/" exact component={() => <Login handleget={this.handleget}/>} />
      <Route path="/login" component={() => <Logout id={this.state.username1} />} />
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
