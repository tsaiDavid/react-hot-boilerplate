import React, { Component } from 'react'

export class TestsPassed extends Component {
  static propTypes = {
    passed: React.PropTypes.number
  };

  render() {
    const { passed } = this.props
    return (
      <div>
        <div> You currently have passed: { passed } </div>
      </div>
    )
  }
}
