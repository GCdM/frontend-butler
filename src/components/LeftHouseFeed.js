import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import EventCard from './cards/EventCard'
import ExpenseCard from './cards/ExpenseCard'

const LeftHouseFeed = (props) => {

  const eventCards = props.events.map( event => <EventCard event={event} housePage={true} /> )
  const expenseCards = props.expenses.map( expense => <ExpenseCard expense={expense} housePage={true} /> )

  const panes = [
    { menuItem: 'Events', pane: eventCards },
    { menuItem: 'Expenses', pane: expenseCards },
  ]

  return (
    <Tab panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    events: state.household.events,
    expenses: state.household.expenses,
  }
}
export default connect(mapStateToProps)(LeftHouseFeed)
