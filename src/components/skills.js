import React, { Component } from "react";
import Sphere from "./sphere";

// import axios from "axios";
// import { Spinner } from "reactstrap";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="boxHome">
        <h1 className="home1 text-flicker-in-glow">Our skillset</h1>
        <h1 className="home2 tracking-in-expand">we are good at:</h1>
        <Sphere></Sphere>
      </div>
    );
  }
}
