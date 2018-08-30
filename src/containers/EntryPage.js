import React from 'react'

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import logo from '../logo.svg'

class EntryPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Butler</h1>
        <img src={logo} style={{width: 200}}/>
        <LoginForm action={this.props.login} />
        <SignUpForm action={this.props.signUp} />
        <br/>
        <p>Description of the website with a brief overview of functionality, aim, and any disclaimers. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </React.Fragment>
    )
  }
}

export default EntryPage
