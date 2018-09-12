import React from 'react'
import moment from 'moment'
import { Segment, Button, Label, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import EventSummary from '../EventSummary'
import { acceptEventUser, rejectEventUser, acceptEventUserHouse, rejectEventUserHouse } from '../../adapters/ButlerAPI'

const ExpenseCard = (props) => {
  const { event, currentUserId, viewedUserId, housePage } = props
  const eventSummaries = event.attendance.map( attendance => <EventSummary event={attendance} /> )


  const attendance = event.attendance.find( attendance => attendance.userId === currentUserId )

  return (
    <Segment>
      <h5 className="float-right">{moment(event.date).format('ll')}</h5>
      <h3 className="float-left"><b>{event.title}</b></h3>
      <br/><br/><br/>
      <h6>{event.description}</h6>
      {eventSummaries}
      <br/><br/>
      {
        currentUserId === viewedUserId ?

        <Button as="div" labelPosition="left">
          <Label>Attending:</Label>
          <Button.Group>
            <Button icon color="red"
              inverted={attendance.status === "rejected" ? false : true}
              dataId={attendance.id}
              onClick={housePage ? props.handleHouseReject : props.handleReject}
            >
              <Icon name="times circle" />
            </Button>
            <Button icon color="green"
              inverted={attendance.status === "accepted" ? false : true}
              dataId={attendance.id}
              onClick={housePage ? props.handleHouseAccept : props.handleAccept}
            >
              <Icon name="check circle" />
            </Button>
          </Button.Group>
        </Button>

        :

        null
      }
    </Segment>
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
    handleAccept: (e, { dataId }) => {
      acceptEventUser(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
    handleReject: (e, { dataId }) => {
      rejectEventUser(dataId).then( userInfo => dispatch({ type: "SET_USER_INFO", payload: userInfo.data }) )
    },
    handleHouseAccept: (e, { dataId }) => {
      acceptEventUserHouse(dataId).then( userInfo => dispatch({ type: "SET_HOUSEHOLD", payload: userInfo.data }) )
    },
    handleHouseReject: (e, { dataId }) => {
      rejectEventUserHouse(dataId).then( userInfo => dispatch({ type: "SET_HOUSEHOLD", payload: userInfo.data }) )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCard)
