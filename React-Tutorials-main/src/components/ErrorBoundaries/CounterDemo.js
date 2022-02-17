import React, { Component } from "react";

export default class CounterDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    if (this.state.count === 5) {
      throw new Error("Error Occured!");
    } else {
      return (
        <div>
          {this.state.count}

          <button onClick={this.handleClick}>Increment</button>
        </div>
      );
    }
  }
}
