const defaultState = {
  events: [],
  responsibilities: [],
  expenses: [],
  payments: [],
}

export default function(state = defaultState, action) {
  // console.log("ViewedUser Action: ", action)
  switch(action.type) {
    case "SET_USER_INFO":
      return action.payload

    case "LOGOUT_USER":
      return defaultState

    default:
      return state
  }
}
