import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import NavBar from './NavBar'
import HouseholdPage from './HouseholdPage'
import UserPage from './UserPage'

class MainPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavBar logout={this.props.logout} />
        <Container>
          <Switch>
            <Route path="/home" render={ () => {
              return <HouseholdPage />
            }} />
            <Route path="/user" render={ () => {
              return <UserPage />
            }} />
            <Redirect to="/user" />
          </Switch>
        </Container>
      </React.Fragment>
    )
  }
}

export default MainPage
