import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import authReducer from './reducers/authReducer'
import householdReducer from './reducers/householdReducer'
import userReducer from './reducers/userReducer'

const allReducers = combineReducers({
  currentUser: authReducer,
  household: householdReducer,
  viewedUser: userReducer,
})
const store = createStore(allReducers)

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
