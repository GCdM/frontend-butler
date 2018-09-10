import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

import ExpenseForm from '../forms/ExpenseForm'
import EventForm from '../forms/EventForm'

class HouseholdPage extends React.Component {

  render() {
    return (
      <Container>
        <Segment>
          <label>Create New:  </label>
          <ExpenseForm />
          <EventForm />
        </Segment>
      </Container>
    )
  }
}

export default HouseholdPage
