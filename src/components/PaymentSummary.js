import React from 'react'
import { connect } from 'react-redux'

import { Label, Icon } from 'semantic-ui-react'
import { togglePaymentReceived } from '../adapters/ButlerAPI'

const PaymentSummary = ({ payment, handleClick, housePage }) => {

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
      <Label as={housePage ? "div" : "a"} image color={color}
        onClick={housePage ? null : handleClick}
        dataId={payment.id}
      >
        <img alt="Household Member" src={payment.userImg} />

        <Icon name={icon} />
      </Label>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (e, { dataId }) => {
      togglePaymentReceived(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
  }
}

export default connect(null, mapDispatchToProps)(PaymentSummary)
