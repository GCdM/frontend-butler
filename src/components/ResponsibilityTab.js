import React from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'

import ResponsibilityCard from './cards/ResponsibilityCard'
import ResponsibilityLogForm from '../forms/ResponsibilityLogForm'

class ResponsibilityTab extends React.Component {

  state = {
    activeResponsibility: {
      id: 0,
      title: "",
      logs: [],
    },
  }

  handleChange = (e, { value }) => {
    this.setState({
      activeResponsibility: value,
    })
  }

  dropdownOptions = () => {
    return this.props.responsibilities.map( responsibility => {
      return {
        text: responsibility.title,
        value: responsibility,
      }
    })
  }

  render() {
    const logs = this.state.activeResponsibility.logs.map( log => <ResponsibilityCard log={log} /> )

    return (
      <Segment>
        <Dropdown selection
          text={this.state.activeResponsibility.title || "Select Responsibility"}
          options={this.dropdownOptions()}
          onChange={this.handleChange}
        >
        </Dropdown>
        <ResponsibilityLogForm responsibility={this.state.activeResponsibility} />
        <br/><br/>
        {logs}
      </Segment>
    )
  }
}

export default ResponsibilityTab
