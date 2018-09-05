import React from 'react'
import { Grid } from 'semantic-ui-react'

import LeftUserFeed from '../components/LeftUserFeed'
import RightUserFeed from '../components/RightUserFeed'

class UserPage extends React.Component {

  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <LeftUserFeed/>
          </Grid.Column>
          <Grid.Column>
            <RightUserFeed/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UserPage
