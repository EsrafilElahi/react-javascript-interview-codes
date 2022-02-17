import React, { Component } from "react";
import HOC from "./HOC";

class CommentsCount extends Component {
  render() {
    return (
      <div>
        Total Comments : {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Add Comment!</button>
      </div>
    );
  }
}

const EnhancedComments = HOC(CommentsCount, 10);

export default EnhancedComments;
