import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "",
      project: [],
      projectsVisibility: false,
      didMount: false,
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
        test: "Portfolio",
        projectsVisibility: true
      });
    }, 3000);
  }
  animation() {
    setTimeout(() => {
      this.setState({
        didMount: true
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
        console.log("ciao");
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
      <div className={`fade-in ${this.state.didMount && "visible"}`}>
        <h1>{this.state.test}</h1>
        <ProgressBar now={this.state.bar} />
        {this.state.projectsVisibility === false && <Spinner color="primary" />}
        {this.state.projectsVisibility &&
          this.state.project.map(object => (
            <div key={object._id}>
              <h1>{object.project_name}</h1>
              <h1>{object.project_date}</h1>
              <h1>{object.project_description}</h1>
            </div>
          ))}
      </div>
    );
  }
}
