import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

import ResponsibilityCard from './cards/ResponsibilityCard'

const ResponsibilityTab = (props) => {

  const responsibilityCards = logs => logs.map( log => <ResponsibilityCard log={log} /> )

  const panes = props.responsibilities.map( responsibility => {
    return { menuItem: responsibility.title, pane: responsibilityCards(responsibility.logs) }
  })


  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} renderActiveOnly={false} />
  )
}

function mapStateToProps(state) {
  return {
    responsibilities: state.household.responsibilities,
  }
}
export default connect(mapStateToProps)(ResponsibilityTab)
