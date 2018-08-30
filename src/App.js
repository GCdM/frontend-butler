import React, { Component } from 'react';

import './App.css';
import EntryPage from './containers/EntryPage'

class App extends Component {

  signUp = (username, password) => {
    console.log("SIGNING UP:")
    console.log("Username: ", username)
    console.log("Password: ", password)
  }

  login = (username, password) => {
    console.log("LOGGING IN:")
    console.log("Username: ", username)
    console.log("Password: ", password)
  }

  render() {
    return (
      <div className="App">
        <EntryPage login={this.login} signUp={this.signUp} />
      </div>
    );
  }
}

export default App;
