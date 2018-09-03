import React from 'react'

import logo from '../logo.svg'

const NavBar = (props) => {
  return (
    <React.Fragment>
      <div class="ui top fixed menu">
        <div class="item">
          <img src={logo} />
        </div>
        <a class="item">Household</a>
        <div class="right menu">
          <a class="item">User</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar
