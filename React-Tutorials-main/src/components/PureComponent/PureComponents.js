import React, { Component } from "react";
import { PureComponent } from "react";


export default class PureComponents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log("Pure Component render method called!");
    return (
      <div>
        <h1>Pure Component</h1> <br />
        {this.state.count}
        <button onClick={this.onIncrement}>Incremnt</button>
      </div>
    );
  }
}
