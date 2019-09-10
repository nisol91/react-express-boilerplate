import React, { Component } from "react";
import Triangle from "./triangle";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cubeVisibility: false
    };
  }

  //cosi controllo la durata del caricamento

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cubeVisibility: true });
    }, 1500);
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        about
        <div className={`fade-in ${this.state.cubeVisibility && "visible"}`}>
          <Triangle></Triangle>
        </div>
      </div>
    );
  }
}
