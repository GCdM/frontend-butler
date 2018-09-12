import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import ResponsibilityTab from './ResponsibilityTab'

const LeftHouseFeed = (props) => {

  const panes = [
    { menuItem: 'Responsibilities', pane: <ResponsibilityTab responsibilities={props.responsibilities}/> },
  ]

  return (
    <Tab menu={{ pointing: true }} panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    responsibilities: state.household.responsibilities
  }
}

export default connect(mapStateToProps)(LeftHouseFeed)
