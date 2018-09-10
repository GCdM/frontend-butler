import React from 'react'
import moment from 'moment'
import { Segment, Button, Label, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import EventSummary from '../EventSummary'
import { acceptEventUser, rejectEventUser } from '../../adapters/ButlerAPI'

const ExpenseCard = (props) => {
  const { event } = props
  const eventSummaries = event.attendance.map( attendance => <EventSummary event={attendance} /> )


  const attendance = event.attendance.find( attendance => attendance.userId === props.userId )

  return (
    <Segment>
      <h5 className="float-right">{moment(event.date).format('llll')}</h5>
      <h3 className="float-left"><b>{event.title}</b></h3>
      <br/><br/><br/>
      <h6>{event.description}</h6>
      {eventSummaries}
      <br/><br/>
      <Button as="div" labelPosition="left">
        <Label as="a">Attending:</Label>
        <Button.Group>
          <Button icon color="red"
            inverted={attendance.status === "rejected" ? false : true}
            dataId={attendance.id}
            onClick={props.handleReject}
          >
            <Icon name="times circle" />
          </Button>
          <Button icon color="green"
            inverted={attendance.status === "accepted" ? false : true}
            dataId={attendance.id}
            onClick={props.handleAccept}
          >
            <Icon name="check circle" />
          </Button>
        </Button.Group>
      </Button>
    </Segment>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.currentUser.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAccept: (e, { dataId }) => {
      acceptEventUser(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
    handleReject: (e, { dataId }) => {
      rejectEventUser(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCard)
