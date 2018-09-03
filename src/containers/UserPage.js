import React from 'react'

import FeedFactory from './FeedFactory'

class UserPage extends React.Component {

  render() {
    return (
      <div className="ui equal width grid">
        <div className="column">
          <FeedFactory />
        </div>
        <div className="column">
          <FeedFactory />
        </div>
      </div>
    )
  }
}

export default UserPage
