import React from 'react'
import { Container, Tab } from 'semantic-ui-react'

import SignUpForm from '../forms/SignUpForm'
import LoginForm from '../forms/LoginForm'
import logo from '../logo.svg'

class EntryPage extends React.Component {

  render() {
    const panes = [
      { menuItem: 'Log In', render: () => <Tab.Pane attached={false}><LoginForm action={this.props.login}/></Tab.Pane> },
      { menuItem: 'Sign Up', render: () => <Tab.Pane attached={false}><SignUpForm action={this.props.signUp}/></Tab.Pane> },
    ]

    return (
      <Container>
        <img src={logo} alt="Butler logo" style={{width: 200}}/>
        <h1>Butler</h1>
        <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
        <br/>
        <p>Description of the website with a brief overview of functionality, aim, and any disclaimers. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br/>
      </Container>
    )
  }
}

export default EntryPage
