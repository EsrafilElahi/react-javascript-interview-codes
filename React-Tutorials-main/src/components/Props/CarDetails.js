import React, { Component } from "react";

export default class CarDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          border: "1px dashed black",
          display: "inline-block",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h3>Name:</h3> {this.props.data.name} <br />
        <h3>Color:</h3> {this.props.data.color} <br />
        <h3>Type:</h3> {this.props.data.type} <br />
      </div>
    );
  }
}
