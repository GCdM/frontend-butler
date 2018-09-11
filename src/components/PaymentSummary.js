import React from 'react'
import { connect } from 'react-redux'

import { Label, Icon } from 'semantic-ui-react'
import { togglePaymentReceived } from '../adapters/ButlerAPI'

const PaymentSummary = ({ payment, handleClick, housePage, currentUserId, viewedUserId }) => {

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

  const icon = mapIcon[payment.status]
  const color = mapColor[payment.status]

  return (
    <React.Fragment>
      <Label as={(housePage || currentUserId !== viewedUserId) ? "div" : "a"} image color={color}
        onClick={(housePage || currentUserId !== viewedUserId) ? null : handleClick}
        dataId={payment.id}
      >
        <img alt="Household Member" src={payment.userImg} />

        <Icon name={icon} />
      </Label>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
    viewedUserId: state.viewedUser.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (e, { dataId }) => {
      console.log("HIT")
      togglePaymentReceived(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSummary)
