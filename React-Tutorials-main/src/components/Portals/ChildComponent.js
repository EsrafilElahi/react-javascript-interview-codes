import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ChildComponent extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <button onClick={this.props.increment}>Increment</button>
      </div>,

      document.getElementById("portal")
    );
  }
}
