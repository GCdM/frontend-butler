import React from 'react'

import ExpenseCard from '../components/ExpenseCard'

class FeedFactory extends React.Component {

  render() {
    return (
      <div className="ui container">
        <div className="ui two item menu">
          <a className="item">Expenses</a>
          <a className="item">Payments</a>
        </div>
        <div className="ui feed">
          <ExpenseCard />
        </div>
      </div>
    )
  }
}

export default FeedFactory
