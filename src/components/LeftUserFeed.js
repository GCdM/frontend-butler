import React from 'react'

const LeftUserFeed = (props) => {
  return (
    <React.Fragment>
      <div className="ui top attached tabular menu">
        <a className="active item" data-tab="events">Events</a>
        <a className="item" data-tab="responsibilities">Responsibilities</a>
      </div>
      <div className="ui bottom attached tab segment active" data-tab="events">

      </div>
      <div className="ui bottom attached tab segment" data-tab="responsibilities">

      </div>
    </React.Fragment>
  )
}

export default LeftUserFeed
