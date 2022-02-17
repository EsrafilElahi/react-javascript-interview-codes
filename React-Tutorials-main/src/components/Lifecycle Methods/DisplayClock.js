import React, { Component } from "react";
import Clock from "./Clock";

export default class DisplayClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  deleteClock = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        {this.state.show ? <Clock /> : <h1>Clock is removed</h1>}
        <br />

        <button onClick={this.deleteClock}>Delete Clock</button>
      </div>
    );
  }
}
