import React, { Component } from "react";
import Columns from "./Columns";

export default class TableDemo extends Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
