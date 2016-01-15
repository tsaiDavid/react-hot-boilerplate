import { combineReducers } from 'redux';
import testRunnerReducer from './testRunner';

export default combineReducers({
  testRunner: testRunnerReducer,
});
