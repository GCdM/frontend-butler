import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Calendar from 'react-calendar'

import ExpenseForm from '../forms/ExpenseForm'
import EventForm from '../forms/EventForm'
import LeftHouseFeed from '../components/LeftHouseFeed'

class HouseholdPage extends React.Component {
  state = {
    date: new Date(),
  }

  calendarChange = date => this.setState({ date })

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
              <Calendar
                value={this.state.date}
                onChange={this.calendarChange}
                minDetail="year"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default HouseholdPage
