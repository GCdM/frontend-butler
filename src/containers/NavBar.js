import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Image, Icon } from 'semantic-ui-react'

import logo from '../logo.svg'
import HouseholdForm from '../forms/HouseholdForm'
import MembersDropdown from '../components/MembersDropdown'
import { getUserInfo } from '../adapters/ButlerAPI'

class NavBar extends React.Component {
  handleItemClick = (e, { name }) => {
    getUserInfo(this.props.currentUser.id)
      .then( userInfo => this.props.storeUserInfo(userInfo.data) )

    this.props.history.push(`/${name}`)
  }

  render() {
    let path = this.props.history.location.pathname
    return (
      <Menu inverted>
        <Menu.Item>
          <Image src={logo} size="mini"/>
        </Menu.Item>
        {
          this.props.currentUser.householdId ?

          <React.Fragment>
            <Menu.Item
              name="home"
              active={path === "/home"}
              onClick={this.handleItemClick}
            ><Icon name="home"/>{this.props.household.name} <i>(ID {this.props.household.id})</i></Menu.Item>
            <Menu.Item active={path === "/housemate"} >
              <MembersDropdown history={this.props.history}/>
            </Menu.Item>
          </React.Fragment>

          :

          <HouseholdForm />
        }

        <Menu.Menu position="right">
          <Menu.Item
            name="user"
            active={path === "/user"}
            onClick={this.handleItemClick}
          ><Icon name="user"/>{this.props.currentUser.displayName}</Menu.Item>
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

function mapDispatchToProps(dispatch) {
  return {
    storeUserInfo: (userInfo) => {
      dispatch({ type: "SET_USER_INFO", payload: userInfo })
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
