import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import EventCard from './cards/EventCard'
import ResponsibilityTab from './ResponsibilityTab'

const LeftHouseFeed = (props) => {

  const eventCards = props.events.map( event => <EventCard event={event} housePage={true} /> )

  const panes = [
    { menuItem: 'Events', pane: eventCards },
    { menuItem: 'Responsibilities', pane: [<ResponsibilityTab responsibilities={props.responsibilities}/>] },
  ]

  return (
    <Tab menu={{ pointing: true }} panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    events: state.household.events,
    responsibilities: state.household.responsibilities,
  }
}
export default connect(mapStateToProps)(LeftHouseFeed)
