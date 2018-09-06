import React from 'react'
import { connect } from 'react-redux'
import { Segment, Feed, Image } from 'semantic-ui-react'
import moment from 'moment'

const PaymentCard = (props) => {
  const {
    userName,
    userImg,
    expenseTitle,
    summary,
    status,
    amount,
  } = props.payment

  return (
    <Segment>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <Image size="mini" src={props.currentUserImg} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              {summary}{amount} to {userName}
              <br/>
              for {expenseTitle}
            </Feed.Summary>
            <br/>
            <Feed.Date>
              {status === "settled" ? moment(props.payment.date).format('LL') : null}
            </Feed.Date>
          </Feed.Content>
          <Feed.Label>
            <Image size="mini" src={userImg} />
          </Feed.Label>
        </Feed.Event>
      </Feed>
    </Segment>
  )
}

function mapStateToProps(state) {
  return {
    currentUserImg: state.currentUser.imgUrl,
  }
}

export default connect(mapStateToProps)(PaymentCard)
