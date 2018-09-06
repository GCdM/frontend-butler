import React from 'react'
import moment from 'moment'
import { Segment } from 'semantic-ui-react'

const ExpenseCard = ({ event }) => {

  return (
    <Segment>
      <h5 className="float-right">{moment(event.date).format('llll')}</h5>
      <h3 className="float-left"><b>{event.title}</b></h3>
      <br/><br/><br/>
      <h6>{event.description}</h6>
    </Segment>
  )
}

export default ExpenseCard
