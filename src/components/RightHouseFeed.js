import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import ExpenseCard from './cards/ExpenseCard'

const LeftHouseFeed = (props) => {

  const expenseCards = props.expenses.map( expense => <ExpenseCard expense={expense} housePage={true} /> )

  const panes = [
    { menuItem: 'Expenses', pane: expenseCards },
  ]

  return (
    <Tab menu={{ pointing: true }} panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    expenses: state.household.expenses,
  }
}

export default connect(mapStateToProps)(LeftHouseFeed)
