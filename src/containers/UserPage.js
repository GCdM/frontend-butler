import React from 'react'

import LeftUserFeed from '../components/LeftUserFeed'
import RightUserFeed from '../components/RightUserFeed'

class UserPage extends React.Component {

  componentDidMount() {
    // $('.menu .item')
    //   .tab()
    // ;
  }

  render() {
    return (
      <div className="ui equal width grid container">
        <div className="row"></div>
        <div className="column">
          <LeftUserFeed />
        </div>
        <div className="column">
          <RightUserFeed />
        </div>
      </div>
    )
  }
}

export default UserPage
