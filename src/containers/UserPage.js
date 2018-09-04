import React from 'react'
import { Grid } from 'semantic-ui-react'

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
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <LeftUserFeed/>
          </Grid.Column>
          <Grid.Column>
            <RightUserFeed/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      // <div className="ui equal width grid container">
      //   <div className="row"></div>
      //   <div className="column">
      //   </div>
      //   <div className="column">
      //   </div>
      // </div>
    )
  }
}

export default UserPage
