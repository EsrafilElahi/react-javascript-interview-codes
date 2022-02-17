import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        {this.state.name && <h1>Hello {this.state.name}</h1>} <br />
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.handleChange} />{" "}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
