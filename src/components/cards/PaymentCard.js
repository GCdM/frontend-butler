import React from 'react'
import { Segment, Feed, Image } from 'semantic-ui-react'

import logo from '../../logo.svg'

const PaymentCard = (props) => {
  console.log(props.payment)

  return (
    <Segment>
      <Feed.Event>
        <Feed.Label>
          <Image size="mini" src={logo} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Date></Feed.Date>
          <Feed.Summary>

          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Segment>
  )
}

export default PaymentCard
