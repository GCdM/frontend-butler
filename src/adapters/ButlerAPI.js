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

const joinHousehold = (householdId) => {

}

const getHouseholdInfo = (householdId) => {
  return fetch(urlBase + `/households/${householdId}`)
    .then( resp => resp.json() )
}

//EVENTS
const createEvent = (householdId, date, title, description) => {
  return fetch(urlBase + `/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: {
        household_id: householdId,
        title,
        description,
        date,
      }
    })
  }).then( resp => resp.json() )
}

const acceptEventUser = (eventUserId) => {
  return fetch(urlBase + `/event_users/${eventUserId}/accept`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

const rejectEventUser = (eventUserId) => {
  return fetch(urlBase + `/event_users/${eventUserId}/reject`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

const acceptEventUserHouse = (eventUserId) => {
  return fetch(urlBase + `/event_users/${eventUserId}/accept_house`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

const rejectEventUserHouse = (eventUserId) => {
  return fetch(urlBase + `/event_users/${eventUserId}/reject_house`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

//EXPENSES
const createExpense = (userId, title, description, date, amount) => {
  return fetch(urlBase + `/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expense: {
        user_id: userId,
        title,
        description,
        date,
        amount,
      }
    })
  }).then( resp => resp.json() )
}

//PAYMENTS
const togglePaymentReceived = (paymentId) => {
  return fetch(urlBase + `/payments/${paymentId}/received`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

const togglePaymentPaid = (paymentId) => {
  return fetch(urlBase + `/payments/${paymentId}/paid`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then( resp => resp.json() )
}

//RESPONSIBILITIES
const createResponsibility = (householdId, title) => {
  return fetch(urlBase + `/responsibilities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      responsibility: {
        household_id: householdId,
        title,
      }
    })
  }).then( resp => resp.json() )
}

const logResponsibility = (responsibilityId, userId, date, description) => {
  return fetch(urlBase + `/responsibilities/${responsibilityId}/create_log`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      log: {
        responsibility_id: responsibilityId,
        user_id: userId,
        date,
        description,
      }
    })
  }).then( resp => resp.json() )
}

export {
  createUser,
  loginUser,
  getCurrentUser,
  getUserInfo,

  createHousehold,
  joinHousehold,
  getHouseholdInfo,

  createEvent,
  acceptEventUser,
  rejectEventUser,
  acceptEventUserHouse,
  rejectEventUserHouse,

  createExpense,
  togglePaymentReceived,
  togglePaymentPaid,

  createResponsibility,
  logResponsibility,
}
