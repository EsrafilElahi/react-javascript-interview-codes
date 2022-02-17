import React, { Component } from "react";
import ChildRef from "./ChildRef";

export default class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }
  onClick = () => {
    this.myRef.current.focus();
    this.myRef.current.placeholder = "Button Clicked!";
    console.log("Value ", this.myRef.current.value);
  };

  render() {
    return (
      <div style={{ border: "1px solid green" }}>
        <h4>Parent Ref:</h4>
        <ChildRef ref={this.myRef} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}
