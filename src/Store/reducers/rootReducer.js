import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import axiosReducer from './axiosReducer'
import { combineReducers } from 'redux'



const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  axios: axiosReducer
})

export default rootReducer ;