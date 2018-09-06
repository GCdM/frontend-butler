import React from 'react'
import { connect } from 'react-redux'
import { Segment, Feed, Image } from 'semantic-ui-react'
import moment from 'moment'

const PaymentCard = (props) => {

  return (
    <Segment>
      <Feed.Event>
        <Feed.Label>
          <Image size="mini" src={props.currentUserImg} floated="left" rounded/>
        </Feed.Label>
        <Feed.Label>
          <Image size="mini" src={props.payment.userImg} floated="right" rounded/>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            {props.payment.summary}
          </Feed.Summary>
          <Feed.Date>{moment(props.payment.date).format('LL')}</Feed.Date>
        </Feed.Content>
      </Feed.Event>
    </Segment>
  )
}

function mapStateToProps(state) {
  return {
    currentUserImg: state.currentUser.imgUrl,
  }
}

export default connect(mapStateToProps)(PaymentCard)
