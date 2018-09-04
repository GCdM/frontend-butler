import React from 'react'
import { connect } from 'react-redux'
import { Menu, Image } from 'semantic-ui-react'

import logo from '../logo.svg'

class NavBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item>
          <Image src={logo} size="mini"/>
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >{this.props.household.name}</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="user"
            active={activeItem === "user"}
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

export default connect(mapStateToProps)(NavBar)
