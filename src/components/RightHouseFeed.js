import React from 'react'
import { Tab } from 'semantic-ui-react'

import ResponsibilityTab from './ResponsibilityTab'

const LeftHouseFeed = (props) => {

  const panes = [
    { menuItem: 'Responsibilities', pane: <ResponsibilityTab /> },
  ]

  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} renderActiveOnly={false} />
  )
}

export default LeftHouseFeed
