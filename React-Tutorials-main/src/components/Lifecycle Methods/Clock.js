import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //we must put a condition before using setstate
    if (this.state.date !== prevState.date) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  componentWillUnmount() {
    alert("Clock Component Will Unmount!");
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

        <h3>This component is Updated {this.state.count} times.</h3>
      </div>
    );
  }
}
