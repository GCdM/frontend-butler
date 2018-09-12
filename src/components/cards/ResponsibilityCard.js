import React from 'react'
import { Segment, Feed, Image } from 'semantic-ui-react'
import moment from 'moment'

const ResponsibilityCard = ({ log }) => {

  return (
    <Segment>
      <Feed>
        <Feed.Date>
          {moment(log.date).format('ll')}
        </Feed.Date>
        <Feed.Label>
          <Image size="mini" src={log.userImg} avatar/>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <b>Notes</b>: {log.description}
          </Feed.Summary>
        </Feed.Content>
      </Feed>
    </Segment>
  )
}

export default ResponsibilityCard
