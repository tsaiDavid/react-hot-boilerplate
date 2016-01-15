import React, { Component } from 'react';

export default class TestRunner extends Component {
  render() {
    return (
      <div>Test Runner</div>
    );
  }

  /**
   * attached to the TestRunner component, we can call the function using 'this'
   */
  generateDummyTest() {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;

    return (callback) => {
      setTimeout(() => {
        callback(testPassed);
      }, delay);
    };
  }

  tests = [
    { description: 'commas are rotated properly',          run: this.generateDummyTest() },
    { description: 'exclamation points stand up straight', run: this.generateDummyTest() },
    { description: 'run-on sentences don\'t run forever',  run: this.generateDummyTest() },
    { description: 'question marks curl down, not up',     run: this.generateDummyTest() },
    { description: 'semicolons are adequately waterproof', run: this.generateDummyTest() },
    { description: 'capital letters can do yoga',          run: this.generateDummyTest() },
  ];
}
