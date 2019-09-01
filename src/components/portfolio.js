import React, { Component } from "react";
import axios from "axios";
import Card from "./card/card";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "",
      project: [],
      projectsVisibility: false,
      barDidMount: false,
      contentDidMount: false,
      bar: 0
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
      this.setState({
        projectsVisibility: true
      });
    }, 3000);
  }
  animation() {
    setTimeout(() => {
      this.setState({
        barDidMount: true
      });
    }, 0);
  }
  progress() {
    let progresso = setInterval(() => {
      let val = this.state.bar + 10;
      console.log(val);
      this.setState({
        bar: val
      });
      if (this.state.bar >= 100) {
        clearInterval(progresso);
      }
    }, 200);
  }
  componentDidMount() {
    this.getProjects();
    this.animation();
    this.progress();
  }
  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }
    // let className_2 = "";
    // if (this.state.slide) {
    //   className_2 += " ";
    // }
    //

    return (
      <div className={`fade-in ${this.state.barDidMount && "visible"}`}>
        {this.state.projectsVisibility === false && (
          <ProgressBar now={this.state.bar} />
        )}
        <div
          className={`boxPortfolio fade-in ${this.state.barDidMount &&
            "visible"}`}
        >
          <div
            className={`works fade-in ${this.state.projectsVisibility &&
              "visible"}`}
          >
            {this.state.project.map(object => (
              <div
                key={object._id}
                className={`fade-in ${this.state.projectsVisibility &&
                  "visible"}`}
              >
                <Card datiPerCard={object} />
              </div>
            ))}
          </div>
          <div
            className={`textPortfolio slide-in-tr ${this.state
              .projectsVisibility && "visible"}`}
          >
            <h1 className="port1">This is our work</h1>
            <h1 className="port2">Check it out</h1>
          </div>
        </div>
      </div>
    );
  }
}
