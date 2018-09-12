import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Image } from 'semantic-ui-react'

import LeftUserFeed from '../components/LeftUserFeed'
import RightUserFeed from '../components/RightUserFeed'

class UserPage extends React.Component {

  render() {
    return (
      <Grid columns={4}>
        {
          this.props.currentUserId !== this.props.viewedUserId
          ?
          <Grid.Row>
            <Segment className="center" >
              <Image size="tiny" src={this.props.viewedUserImg} />
              {
                this.props.viewedUserId
                ?
                <h4>{this.props.viewedUserName}</h4>
                :
                <p>You'll need a Household before you can start keeping track of your activities.<br/>You can join an existing Household or create a new one above.</p>
              }
            </Segment>
          </Grid.Row>
          :
          null
        }

        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={7}>
            <LeftUserFeed/>
          </Grid.Column>
          <Grid.Column width={7}>
            <RightUserFeed/>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
    viewedUserId: state.viewedUser.id,
    viewedUserImg: state.viewedUser.imgUrl,
    viewedUserName: state.viewedUser.displayName,
  }
}

export default connect(mapStateToProps)(UserPage)
