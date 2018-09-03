import React from 'react'

import ExpenseCard from '../components/ExpenseCard'

class FeedFactory extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="ui top attached tabular menu">
          <a className="active item" data-tab="expenses">Expenses</a>
          <a className="item" data-tab="events">Events</a>
        </div>
        <div className="ui bottom attached tab segment active" data-tab="expenses">

        </div>
        <div className="ui bottom attached tab segment" data-tab="events">

        </div>
      </React.Fragment>
    )
  }
}

export default FeedFactory
