import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import { TestsPassed } from '../components/TestsPassed'

const mapStateToProps = (state) => ({
  isRunning: state.testRunner.isRunning,
  tests: state.testRunner.tests
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export class TestRunner extends Component {
  static propTypes = {
    isRunning: React.PropTypes.bool.isRequired,
    tests: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    // console.log(this.props)
    //
    // for (const test of this.tests) {
    //   console.log('running test')
    //   test.run()
    // }

    return (
      <div>
        {
          this.props.isRunning
          ?
          <h3>Running your tests cases, please wait.</h3>
          :
          <h3>You are not currently running any tests!</h3>
        }
        <TestsPassed passed={this.calculateTotalPassed()}/>

        <button onClick={() => this.handleStartTest()}>Start</button>
      </div>
    )
  }

  handleStartTest() {
    const actions = this.props.actions
    actions.userStartTests()
  }

  calculateTotalPassed() {
    let total = 0
    for (const test of this.tests) {
      // only add to the total if the test passed
      test.passed ? total++ : null
    }
    return total
  }

  /**
   * attached to the TestRunner component, we can call the function using 'this'
   */
  generateDummyTest() {
    const delay = 7000 + Math.random() * 7000
    const testPassed = Math.random() > 0.5

    return (callback) => {
      setTimeout(() => {
        callback(testPassed)
      }, delay)
    }
  }

  tests = [
    { description: 'commas are rotated properly',          run: this.generateDummyTest() },
    { description: 'exclamation points stand up straight', run: this.generateDummyTest() },
    { description: 'run-on sentences don\'t run forever',  run: this.generateDummyTest() },
    { description: 'question marks curl down, not up',     run: this.generateDummyTest() },
    { description: 'semicolons are adequately waterproof', run: this.generateDummyTest() },
    { description: 'capital letters can do yoga',          run: this.generateDummyTest() }
  ];
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRunner)
