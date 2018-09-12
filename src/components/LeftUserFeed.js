import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import EventCard from './cards/EventCard'
import ResponsibilityCard from './cards/ResponsibilityCard'
import ResponsibilityTab from './ResponsibilityTab'

const LeftUserFeed = (props) => {

  const eventCards = props.events.map( event => <EventCard event={event} /> )

  const panes = [
    { menuItem: 'Events', pane: eventCards },
    { menuItem: 'Responsibilities', pane: [<ResponsibilityTab responsibilities={props.responsibilities} />] },
  ]

  return (
    <Tab menu={{ pointing: true }} panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    events: state.viewedUser.events,
    responsibilities: state.viewedUser.responsibilities,
  }
}
export default connect(mapStateToProps)(LeftUserFeed)
