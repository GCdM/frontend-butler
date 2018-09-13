import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

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
      <React.Fragment>
        <Dropdown selection
          text={this.state.activeResponsibility.title || "Select Responsibility"}
          options={this.dropdownOptions()}
          onChange={this.handleChange}
        >
        </Dropdown>
        <br/>
        {
          this.props.currentUserId === this.props.viewedUserId
          ?
          <ResponsibilityLogForm responsibility={this.state.activeResponsibility} />
          :
          null
        }
        <br/><br/>
        {logs}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
    viewedUserId: state.viewedUser.id,
  }
}

export default connect(mapStateToProps)(ResponsibilityTab)
