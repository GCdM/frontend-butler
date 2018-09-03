import React from 'react'

import logo from '../logo.svg'

const NavBar = (props) => {
  return (
    <React.Fragment>
      <div className="ui top fixed menu">
        <div className="item">
          <img src={logo} />
        </div>
        <a className="item">Household</a>
        <div className="right menu">
          <a className="item">User</a>
          <a className="item" onClick={props.logout}>Log Out</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar
