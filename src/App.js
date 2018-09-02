import React from 'react';
import { withRouter, Route } from 'react-router-dom'


import './App.css';
import EntryPage from './containers/EntryPage'
import { createUser, loginUser } from './adapters/ButlerAPI'

class App extends React.Component {

  state = {
    current_user: null,
  }

  logOut = () => {
    this.setState({
      current_user: null
    })
    this.props.history.push('/')
    localStorage.removeItem('token')
  }

  // componentDidMount() {
  //
  // }

  state = {
    current_user: null,
  }

  postAuth = (userData) => {
    if (userData.error) {
      alert(userData.error)
    } else {
      localStorage.setItem('token', userData.token)
      this.updateCurrentUser(userData.token)
      this.props.history.push('/home')
    }
  }

  signUp = (username, password) => {
    createUser(username, displayName, password)
      .then( this.postAuth )
  }

  login = (username, password) => {
    loginUser(username, password)
      .then( this.postAuth )
  }

  logout = () => {
    this.setState({
      current_user: null
    })
    this.props.history.push('/login')
    localStorage.clear()
  }

  updateCurrentUser = (token) => {
    getCurrentUser(token).then( userData => {
      if (userData.error) {
        this.logout()
      } else {
        this.setState({
          current_user: userData.user_data
        })
      }
    })
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.updateCurrentUser(localStorage.getItem('token'))
    }
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
