import React, { Component } from "react";
import axios from "axios";
import Sphere from "./sphere";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "Home",
      project: [],
      projectsVisibility: false
    };
  }
  getProjects() {
    axios
      .get("http://localhost:4040/project")
      .then(response => {
        this.setState({ project: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    //cosi controllo la durata del caricamento
    setTimeout(() => {
      this.setState({ projectsVisibility: true });
    }, 2000);
  }
  componentDidMount() {}
  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }
    return (
      <div className="boxHome">
        <h1 className="home1 text-flicker-in-glow">Hey</h1>
        <h1 className="home2 tracking-in-expand">We are Downhill Studios</h1>
        <Sphere></Sphere>
      </div>
    );
  }
}
