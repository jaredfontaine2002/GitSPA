// Import React
import React, { Component } from 'react';
import {Router} from '@reach/router';
import firebase from'./Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';



class App extends Component {
  constructor() {
    super();
      this.state = {
        user: null
      };
  }

  componentDidMount() {
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    });

  }
  render() {
    return (
      <div>
        <Nav user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user}/>}
        <Router>
        <Home path="/" user={this.state.user}/>
        <Login path="/Login" />
        <Meetings path="/Meetings" />
        <Register path="/Register" />
        </Router>
        
        </div>
   
  );
  }
}

export default App;
