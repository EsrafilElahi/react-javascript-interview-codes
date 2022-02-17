import React, { Component } from "react";
import HOC from "./HOC";

class LikesCount extends Component {
  render() {
    return (
      <div>
        Hello {this.props.username}. <br />
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Like👍🏻</button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(LikesCount, 5);

export default EnhancedLikes;
