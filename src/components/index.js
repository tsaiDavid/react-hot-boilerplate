/**
 * Running out of time -
 *
 * Here I would have simply built out the following:
 *
 * The application would iterate through the list of objects provided, indicating which tests to be run.
 *
 * As soon as each test object was triggered, I'd use redux to access the dispatch method,
 * allowing me to fire off an action. The action type would be "USER_START_TESTS",
 * followed by an additional action "TEST_RUNNING" which would contain the payload of
 * the test object, for easy reference later.
 *
 * When each test finishes running, a callback function would be executed - then dispatching
 * "TEST_PASSED" or "TEST_FAILED" based on the boolean result the test case would return.
 *
 * Thanks to the global app-state, and a single source of truth, my UI would then reflect those changes.
 * This is because our state tree would look something like this:
 *
 * {
 * 	isRunning: true,
 * 	tests: {
 * 		1: {
 * 			description: "commas are rotated properly",
 * 			isTestRunning: false,
 * 			testResult: false,
 * 		},
 * 		2: {
 * 			description: "exclamation points stand up straight",
 * 			isTestRunning: true,
 * 			testResult: null
 * 		}
 * 	}
 * }
 *
 * This will allow me to easily render the UI for each particular test case and overall
 * test run status for the entire app.
 *
 * I structured the app in such a way that it can be easily extensible for future authors.
 */
