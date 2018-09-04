const urlBase = 'http://localhost:3000/api/v1'

//USERS
const createUser = (username, display_name, password) => {
  return fetch(urlBase + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        display_name,
        password,
      }
    })
  }).then( resp => resp.json() )
}

const loginUser = (username, password) => {
  return fetch(urlBase + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      }
    })
  }).then( resp => resp.json() )
}

const getCurrentUser = (token) => {
  return fetch(urlBase + `/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }).then( resp => resp.json() )
}

const getUserInfo = (userId) => {
  return fetch(urlBase + `/users_info/${userId}`)
    .then( resp => resp.json() )
}

//HOUSEHOLDS
const createHousehold = (name) => {

}

const getHouseholdInfo = (householdId) => {
  return fetch(urlBase + `/households/${householdId}`)
    .then( resp => resp.json() )
}

export {
  createUser,
  loginUser,
  getCurrentUser,
  getUserInfo,
  createHousehold,
  getHouseholdInfo,
}
