const defaultState = {
  id: 0,
  name: "",
  events: [],
  expenses: [],
}

export default function(state = defaultState, action) {
  // console.log("Household Action: ", action)
  switch(action.type) {
    case "SET_HOUSEHOLD":
      return action.payload

    case "LOGOUT_USER":
      return defaultState

    default:
      return state
  }
}
