import React from 'react'

import logo from '../../logo.svg'

const ExpenseCard = (props) => {
  return (
    <div className="event">
      <div className="label">
        <img src={logo} />
      </div>
      <div className="content">
        <div className="summary">
          <a className="user">
            Gabriel Miranda
          </a> did something
          <div className="date">
            01/01/18
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCard
