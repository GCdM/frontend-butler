import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import ExpenseCard from './cards/ExpenseCard'
import PaymentCard from './cards/PaymentCard'

const RightUserFeed = (props) => {

  const expenseCards = props.expenses.map( expense => <ExpenseCard expense={expense} /> )
  const paymentCards = props.payments.map( payment => <PaymentCard payment={payment} /> )

  const panes = [
    { menuItem: 'Expenses', pane: expenseCards },
    { menuItem: 'Payments', pane: paymentCards },
  ]

  return (
    <Tab panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    expenses: state.viewedUser.expenses,
    payments: state.viewedUser.payments,
  }
}

export default connect(mapStateToProps)(RightUserFeed)
