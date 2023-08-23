import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNumber: 0,
    };
  }

  incrementNumber() {
    this.setState({
      countNumber: this.state.countNumber + 1,
    });
  }

  decrementNumber() {
    this.setState({
      countNumber: this.state.countNumber - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementNumber()}>Increase Count</button>
        <button onClick={() => this.decrementNumber()}>Decrease Count</button>
      </div>
    );
  }
}
