import React from 'react'

import { Label, Icon } from 'semantic-ui-react'

const PaymentSummary = ({ payment }) => {

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
      <Label as="a" image color={color}>
        <img alt="Household Member" src={payment.userImg} />

        <Icon name={icon} />
      </Label>
    </React.Fragment>
  )
}

export default PaymentSummary
