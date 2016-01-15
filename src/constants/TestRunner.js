/**
 * These actions signify the state of the application.
 * USER, will indicate to app via button click that tests have begun.
 * When all those tests complete, those tests will mark all complete.
 */
 export const USER_START_TESTS = 'USER_START_TESTS';
 export const USER_END_TESTS = 'USER_END_TESTS';

 /**
  * These constants signify the given action for a particular test
  */
 export const TEST_RUNNING = 'TEST_RUNNING';
 export const TEST_PASSED = 'TEST_PASSED';
 export const TEST_FAILED = 'TEST_FAILED';
