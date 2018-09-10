import React from 'react'
import { Label, Icon } from 'semantic-ui-react'

const EventSummary = ({ event }) => {

  const mapIcon = {
    "accepted": "check circle",
    "pending": "circle outline",
    "rejected": "times circle",
  }

  const mapColor = {
    "accepted": "green",
    "pending": "yellow",
    "rejected": "red",
  }

  const icon = mapIcon[event.status]
  const color = mapColor[event.status]

  return (
    <React.Fragment>
      <Label as="a" image color={color}>
        <img alt="Household Member" src={event.userImg} />

        <Icon name={icon} />
      </Label>
    </React.Fragment>
  )
}

export default EventSummary
