import { combineReducers } from 'redux';
import testRunner from './testRunner';

export default combineReducers({
  testRunner: testRunner,
});
