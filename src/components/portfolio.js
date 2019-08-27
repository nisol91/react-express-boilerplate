import React, { Component } from "react";
// import axios from "axios";
// import Alert from "./Alert";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "ciao"
    };
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h1>{this.state.test}</h1>
      </div>
    );
  }
}
