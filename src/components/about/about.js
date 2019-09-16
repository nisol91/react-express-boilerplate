import React, { Component } from "react";
import Triangle from "../triangle";
import "./about.scss";
import { translate } from "react-i18next";

class About extends Component {
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
    const { t } = this.props;
    return (
      <div style={{ marginTop: 10 }}>
        <div className="aboutcontainer">
          <h1>{t("Welcome to React")}</h1>

          <h1 className="about1 text-flicker-in-glow">About the studio</h1>
          <h1 className="about2 tracking-in-expand">good at:</h1>
          <h1 className="about3 swing-in-top-fwd">JavaScript, Html, Css</h1>
          <h1 className="about2 tracking-in-expand">the stack:</h1>

          <h1 className="skills3 swing-in-top-fwd">
            React, ReactNative, NodeJs, MongoDB
          </h1>
        </div>
        <div className={`fade-in ${this.state.cubeVisibility && "visible"}`}>
          <Triangle></Triangle>
        </div>
      </div>
    );
  }
}
export default translate()(About);
