import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Image } from 'semantic-ui-react'

import logo from '../logo.svg'

class NavBar extends React.Component {
  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name}`)
  }

  render() {
    let path = this.props.history.location.pathname
    return (
      <Menu inverted>
        <Menu.Item>
          <Image src={logo} size="mini"/>
        </Menu.Item>
        <Menu.Item
          name="home"
          active={path === "/home"}
          onClick={this.handleItemClick}
        >{this.props.household.name}</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="user"
            active={path === "/user"}
            onClick={this.handleItemClick}
          >{this.props.currentUser.displayName}</Menu.Item>
          <Menu.Item
            name="logout"
            onClick={this.props.logout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    household: state.household,
  }
}

export default withRouter(connect(mapStateToProps)(NavBar))
