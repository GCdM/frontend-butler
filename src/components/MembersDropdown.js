import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import { getUserInfo } from '../adapters/ButlerAPI.js'

const MembersDropdown = (props) => {

  const dropdownOptions = props.members.map( member => {
    return {
      text: member.displayName,
      value: member.id,
      image: member.imgUrl,
    }
  })

  const handleChange = (e, { value }) => {
    props.history.push("/housemate")
    getUserInfo(value)
      .then( userInfo => props.storeUserInfo(userInfo.data) )
  }

  return (
    <Dropdown
      text="Members"
      options={dropdownOptions}
      onChange={handleChange}
    >
    </Dropdown>
  )
}

function mapStateToProps(state) {
  return {
    members: state.household.members,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeUserInfo: (userInfo) => {
      dispatch({ type: "SET_USER_INFO", payload: userInfo })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersDropdown)
