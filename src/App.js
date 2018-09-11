import React from 'react';
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import EntryPage from './containers/EntryPage'
import MainPage from './containers/MainPage'
import { createUser, loginUser, getCurrentUser, getHouseholdInfo, getUserInfo } from './adapters/ButlerAPI'

class App extends React.Component {

  postAuth = (userData) => {
    if (userData.error) {
      alert(userData.error)
    } else {
      localStorage.setItem('token', userData.token)
      this.updateCurrentUser(userData.token)
      this.props.history.push('/user')
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
    this.props.logout()
    localStorage.clear()
    this.props.history.push('/')
  }

  updateCurrentUser = (token) => {
    getCurrentUser(token).then( userData => {
      if (userData.error) {
        this.logout()
      } else {
        this.props.login(userData.data)
        this.updateStore(userData)
      }
    })
  }

  updateStore = (userData) => {
    if (userData.data.householdId) {
      this.updateCurrentHousehold(userData.data.householdId)
      this.updateViewedUser(userData.data.id)
    }
  }

  updateCurrentHousehold = (householdId) => {
    getHouseholdInfo(householdId)
      .then( householdData => this.props.storeHousehold(householdData.data) )
  }

  updateViewedUser = (userId) => {
    getUserInfo(userId)
      .then( userInfo => this.props.storeUserInfo(userInfo.data) )
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
        this.props.currentUser.loggedOut ?

        <Route path="/" render={ () => {
          return <EntryPage
                    login={this.login}
                    signUp={this.signUp}
                  />
        }} />

        :

        <Route path="/" render={ () => {
          return <MainPage
                    logout={this.logout}
                  />
        }} />
      }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    store: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (userData) => {
      dispatch({ type: "LOGIN_USER", payload: userData })
    },
    logout: () => {
      dispatch({ type: "LOGOUT_USER" })
    },
    storeHousehold: (householdData) => {
      dispatch({ type: "SET_HOUSEHOLD", payload: householdData })
    },
    storeUserInfo: (userInfo) => {
      dispatch({ type: "SET_USER_INFO", payload: userInfo })
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
