import React, { Component } from "react";
import Cube from "../cube";

import "./skills.scss";

// import axios from "axios";
// import { Spinner } from "reactstrap";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cubeShow: false
    };
  }
  animation() {
    setTimeout(() => {
      this.setState({
        cubeShow: true
      });
    }, 0);
  }
  componentDidMount() {
    this.animation();
  }
  render() {
    return (
      <div className="boxSkills">
        <div className="skillssx">
          <h1 className="skills1 text-flicker-in-glow">The skillset</h1>
          <h1 className="skills2 tracking-in-expand">good at:</h1>
          <h1 className="skills3 swing-in-top-fwd">JavaScript, Html, Css</h1>
          <h1 className="skills2 tracking-in-expand">the stack:</h1>

          <h1 className="skills3 swing-in-top-fwd">
            React, ReactNative, NodeJs, MongoDB
          </h1>
        </div>
        <div
          className={`skillssdx fade-in ${this.state.cubeShow && "visible"}`}
        >
          <Cube></Cube>
        </div>
      </div>
    );
  }
}
