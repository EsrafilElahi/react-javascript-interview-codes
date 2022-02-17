import React, { Component } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.placeholder = "Placeholder Value";
    console.log("ClassName is --> ", this.inputRef.current.className);
  }
  onSubmit = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input className="xyz" type="text" ref={this.inputRef} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
