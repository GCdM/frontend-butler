const defaultState = {
  events: [],
  expenses: [],
}

export default function(state = defaultState, action) {
  // console.log("ViewedUser State: ", state)
  switch(action.type) {
    case "SET_USER_INFO":
      return {...state}

    default:
      return state
  }
}
