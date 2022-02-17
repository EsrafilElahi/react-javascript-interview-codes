import React, { Component } from "react";

export default class DemoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        gender: "",
      },
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      ...this.state.form,

      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  };

  render() {
    return (
      <div>
        <h1>Signup Form</h1> <br />
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" id="" onChange={this.handleChange} />
          <br />

          <label>Email: </label>
          <input type="email" name="email" id="" onChange={this.handleChange} />
          <br />

          <label>Gender: </label>
          <select name="gender" onChange={this.handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
