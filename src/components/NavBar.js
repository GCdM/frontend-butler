import React from 'react'
import { connect } from 'react-redux'

import logo from '../logo.svg'

const NavBar = (props) => {
  return (
    <React.Fragment>
      <div className="ui top fixed menu">
        <div className="item">
          <img src={logo} />
        </div>
        <a className="item"><i className="home icon"></i>{props.household.name}</a>
        <div className="right menu">
          <a className="item">{props.currentUser.displayName}</a>
          <a className="item" onClick={props.logout}>Log Out</a>
        </div>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    household: state.household,
  }
}

export default connect(mapStateToProps)(NavBar)
