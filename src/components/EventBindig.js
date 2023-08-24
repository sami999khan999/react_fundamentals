import React, { Component } from "react";

export default class EventBindig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {/* ------------------------------------------------------------------------------------- */}
        {/* use inline arrow if we need to pass argument*/}
        <button onClick={() => this.incrementCount()}>Increase Count</button>
        {/* ------------------------------------------------------------------------------------- */}
        {/* inline bind mentod */}
        <button onClick={this.decrementCount.bind(this)}>Decrease Count</button>
        {/* ------------------------------------------------------------------------------------- */}
        {/* use bind method in constructor if we use class */}
        <button onClick={this.decrementCount}>Decrease Count</button>
        {/* ------------------------------------------------------------------------------------- */}
        {/* handeler arrow function */}
        <button onClick={this.decrementCount}>Decrease Count</button>
      </div>
    );
  }
}
