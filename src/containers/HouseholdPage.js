import React from 'react'
import { Container, Segment, Grid } from 'semantic-ui-react'

import ExpenseForm from '../forms/ExpenseForm'
import EventForm from '../forms/EventForm'
import LeftHouseFeed from '../components/LeftHouseFeed'

class HouseholdPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Segment>
          <label>Create New:  </label>
          <ExpenseForm />
          <EventForm />
        </Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <LeftHouseFeed/>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default HouseholdPage
