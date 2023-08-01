//import {  legacy_createStore  } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
//import Login from '../components/login'


const store = createStore(
  rootReducer,
 // initialState, 
)

export default store

