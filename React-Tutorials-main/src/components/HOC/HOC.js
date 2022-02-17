import React, { Component } from "react";

const HOC = (Component, data) => {
  //console.log("data", data);

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: data,
        name: JSON.stringify(localStorage.getItem("username")),
      };
    }

    handleCLick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <Component
          username={this.state.name}
          CountNumber={this.state.count}
          handleCLick={this.handleCLick}
        />
      );
    }
  };
};

export default HOC;
