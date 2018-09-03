const defaultState = {
  id: 0,
  name: "",
  events: [],
  expenses: [],
}

export default function(state = defaultState, action) {
  // console.log("Household State: ", state)
  switch(action.type) {
    case "SET_HOUSEHOLD":
      return action.payload

    default:
      return state
  }
}