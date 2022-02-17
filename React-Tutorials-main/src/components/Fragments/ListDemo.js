import React, { Component } from "react";

export default class ListDemo extends Component {
  render() {
    const colors = [
      {
        id: 1,
        color: "red",
      },
      {
        id: 2,
        color: "blue",
      },
      {
        id: 3,
        color: "green",
      },
      {
        id: 4,
        color: "yellow",
      },
    ];
    return (
      <>
        {colors.map((item) => (
          <React.Fragment key={item.id}>{item.color}</React.Fragment>
        ))}
      </>
    );
  }
}
