import React from 'react'
import { Container, Tab, Image } from 'semantic-ui-react'

import SignUpForm from '../forms/SignUpForm'
import LoginForm from '../forms/LoginForm'
import logo from '../logo.png'

class EntryPage extends React.Component {

  render() {
    const panes = [
      { menuItem: 'Log In', render: () => <Tab.Pane attached={false}><LoginForm action={this.props.login}/></Tab.Pane> },
      { menuItem: 'Sign Up', render: () => <Tab.Pane attached={false}><SignUpForm action={this.props.signUp}/></Tab.Pane> },
    ]

    return (
      <Container>
        <br/>
        <Image src={logo} size="large" circular centered/>
        <h1>Butlr</h1>
        <p>Welcome to Butlr!<br/> Our mission is to help those living together keep neat notes of events, expenses, and chores.<br/> Sign up with your roommates and start getting your house in order!</p>
        <br/><br/>
        <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
        <br/><br/>
      </Container>
    )
  }
}

export default EntryPage
