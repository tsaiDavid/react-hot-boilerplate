import { combineReducers } from 'redux'
import testsReducer from './testsReducer'

export default combineReducers({
  testRunner: testsReducer
})
