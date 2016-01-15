import * as types from 'constants/testRunner';

const initialState = {
  // Bool to indicate state of overall testing
  isRunning: false,
  // Initially empty - test obj will be populated with tests to be run
  tests: {},
};

export default function testRunnerReducer(state = initalState, action) {
  const extendTests = Object.assign({}, state.tests, action.test);

  switch (action.type) {
  case types.USER_START_TESTS:
    return Object.assign({}, state, {
      isRunning: true,
    });

  case types.USER_END_TESTS:
    return Object.assign({}, state, {
      isRunning: false,
    });

  case types.TEST_RUNNING:
    return Object.assign({}, state, {
      tests: extendTests,
    });

  case types.TEST_PASSED:
    return Object.assign({}, state, {
      tests: extendTests,
    });

  case types.TEST_FAILED:
    return Object.assign({}, state, {
      tests: extendTests,
    });

  default:
    return state;
  }
}
