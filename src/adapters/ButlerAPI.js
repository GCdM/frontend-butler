const urlBase = 'http://localhost:3000/api/v1'

const createUser = (username, display_name, password) => {
  return fetch(urlBase + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      username,
      display_name,
      password,
    }
  }).then( resp => resp.json() )
}

const loginUser = (username, password) => {
  return fetch(urlBase + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      username,
      password,
    }
  }).then( resp => resp.json() )
}

export {
  createUser,
  loginUser,
}
