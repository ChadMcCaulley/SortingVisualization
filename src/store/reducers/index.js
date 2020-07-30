import arrayReducer from './array'
import { combineReducers } from 'redux'

export default combineReducers({
  array: arrayReducer
})