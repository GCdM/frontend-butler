import React from 'react';
import { withRouter, Route } from 'react-router-dom'


import './App.css';
import EntryPage from './containers/EntryPage'
import { createUser, loginUser } from './adapters/ButlerAPI'

class App extends React.Component {

  postAuth = (data) => {
    if (data.error) {
      alert(data.error)
    } else {
      this.setState({
        current_user: data
      }, this.afterLogin)
    }
  }

  signUp = (username, displayName, password) => {
    // console.log("SIGNING UP:")
    // console.log("Username: ", username)
    // console.log("Password: ", password)
    createUser(username, displayName, password)
      .then( this.postAuth )
  }

  login = (username, password) => {
    console.log("LOGGING IN:")
    console.log("Username: ", username)
    console.log("Password: ", password)
    loginUser(username, password)
      .then( this.postAuth )
  }

  afterLogin = () => {
    // this.props.history.push(`/${this.state.username}`)
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={ () => {
          return <EntryPage login={this.login} signUp={this.signUp} />
        }} />
      </div>
    );
  }
}

export default withRouter(App);
