import * as types from '../constants/TestRunner';

/**
 * Currently optional parameter, 'name', will indicate who started test
 */
export function userStartTests(name) {
  return {
    type: types.USER_START_TESTS,
    name: name,
  };
}

/**
 * Called when the tests are all completed running
 */
export function userEndTests() {
  return {
    type: types.USER_END_TESTS,
  };
}

/**
 * The following 3 functions will create an action indicating its state, whether it's
 * running, passing, or failing a particular test.
 */
export function runTest(test) {
  return {
    type: types.TEST_RUNNING,
    test,
  };
}

export function testPassed(test) {
  return {
    type: types.TEST_PASSED,
    test,
  };
}

export function testFailed(test) {
  return {
    type: types.TEST_FAILED,
    test,
  };
}
