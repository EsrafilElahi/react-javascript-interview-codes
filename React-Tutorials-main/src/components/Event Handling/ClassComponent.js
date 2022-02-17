import React, { Component } from "react";
import ChildofClassComponent from "./ChildofClassComponent";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "abc",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    console.log("Button is clicked in the class component");
    console.log(this);

    this.setState({
      name: "def",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.clickHandler}>Class Button</button>
        <br />
        <ChildofClassComponent method={this.clickHandler} />
      </div>
    );
  }
}
