const defaultState = {
  id: 0,
  username: "",
  displayName: "",
  householdId: 0,
  loggedOut: true,
}

export default function(state = defaultState, action) {
  // console.log("CUser State: ", state)
  switch(action.type) {
    case "LOGIN_USER":
      return action.payload

    case "LOGOUT_USER":
      return defaultState

    default:
      return state
  }
}
