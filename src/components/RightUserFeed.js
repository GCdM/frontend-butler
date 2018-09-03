import React from 'react'

const RightUserFeed = (props) => {
  return (
    <React.Fragment>
      <div className="ui top attached tabular menu">
        <a className="active item" data-tab="expenses">Expenses</a>
        <a className="item" data-tab="payments">Payments</a>
      </div>
      <div className="ui bottom attached tab segment active" data-tab="expenses">

      </div>
      <div className="ui bottom attached tab segment" data-tab="payments">

      </div>
    </React.Fragment>
  )
}

export default RightUserFeed
