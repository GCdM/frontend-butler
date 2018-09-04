import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import EventCard from './cards/EventCard'
import ResponsibilityCard from './cards/ResponsibilityCard'

const LeftUserFeed = (props) => {

  const eventCards = props.events.map( event => <EventCard event={event} /> )
  const responsibilityCards = props.responsibilities.map( responsibility => <ResponsibilityCard responsibility={responsibility} /> )

  const panes = [
    { menuItem: 'Events', pane: eventCards },
    { menuItem: 'Responsibilities', pane: responsibilityCards },
  ]

  return (
    <Tab panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    events: state.viewedUser.events,
    responsibilities: state.viewedUser.responsibilities,
  }
}
export default connect(mapStateToProps)(LeftUserFeed)
