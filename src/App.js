import React from 'react';
import { withRouter, Route } from 'react-router-dom'


import './App.css';
import EntryPage from './containers/EntryPage'
import MainPage from './containers/MainPage'
import { createUser, loginUser, getCurrentUser } from './adapters/ButlerAPI'

class App extends React.Component {

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

  signUp = (username, displayName, password) => {
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
    this.props.history.push('/')
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
      {
        this.state.current_user ?

        <Route path="/" render={ () => {
          return <EntryPage login={this.login} signUp={this.signUp} />
        }} />

        :

        <Route path="/" render={ () => {
          return <MainPage />
        }} />
      }

      </div>
    );
  }
}

export default withRouter(App);
