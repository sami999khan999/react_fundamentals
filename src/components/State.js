import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNumber: 0,
    };

    this.decrementNumber = this.decrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState({
      countNumber: this.state.countNumber + 1,
    });
  }

  decrementNumber = () => {
    this.setState({
      countNumber: this.state.countNumber - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementNumber()}>Increase</button>
        <button onClick={() => this.decrementNumber()}>Decrease</button>
      </div>
    );
  }
}
