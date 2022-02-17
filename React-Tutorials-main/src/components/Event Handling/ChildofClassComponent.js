import React, { Component } from "react";

export default class ChildofClassComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.method}>Child Button</button>
      </div>
    );
  }
}
