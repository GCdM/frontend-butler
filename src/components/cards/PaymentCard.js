import React from 'react'
import { connect } from 'react-redux'
import { Segment, Feed, Image, Button, Icon, Label } from 'semantic-ui-react'
import moment from 'moment'

import { togglePaymentPaid } from '../../adapters/ButlerAPI'

const PaymentCard = (props) => {
  const {
    id,
    userName,
    userImg,
    expenseTitle,
    summary,
    status,
    amount,
  } = props.payment

  const mapIcon = {
    "settled": "check circle",
    "pending": "circle",
    "unpaid": "circle outline",
  }

  const mapColor = {
    "settled": "green",
    "pending": "yellow",
    "unpaid": "orange",
  }

  const icon = mapIcon[status]
  const color = mapColor[status]

  return (
    <Segment color={color}>
      <Feed>
        <Feed.Event>
          {
            props.currentUserId === props.viewedUserId
            ?
            <Button as="div" labelPosition="right">
              <Button
                size="mini" color={color} basic
                dataId={id}
                onClick={props.handleClick}
                >
                Paid
              </Button>
              <Label color={color}>
                <Icon name={icon}/>
              </Label>
            </Button>
            :
            null
          }
          <Feed.Label>
            <Image size="mini" src={props.viewedUserImg} avatar/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary className="payment-card">
              {summary}{amount} to <a>{userName}</a> for
              <br/>
              <u>{expenseTitle}</u>
            </Feed.Summary>
            <br/>
            <Feed.Date>
              {status === "settled" ? moment(props.payment.date).format('LL') : null}
            </Feed.Date>
          </Feed.Content>
          <Feed.Label>
            <Image size="mini" src={userImg} avatar/>
          </Feed.Label>
        </Feed.Event>
      </Feed>
    </Segment>
  )
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
    viewedUserId: state.viewedUser.id,
    viewedUserImg: state.viewedUser.imgUrl,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (e, { dataId }) => {
      togglePaymentPaid(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCard)
