import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "",
      project: [],
      projectsVisibility: false,
      slide: false
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
        test: "portfolio",
        projectsVisibility: true,
        slide: true
      });
    }, 1000);
  }
  slideIn() {
    // this.setState({ slide: true });
  }
  componentDidMount() {
    this.getProjects();
    this.slideIn();
  }
  render() {
    //==handling css classes==
    let className_1 = "portfolioContainer";
    if (this.state.slide) {
      className_1 += " slide";
    }
    let className_2 = "slider";
    if (this.state.slide) {
      className_2 += " slide_2";
    }
    //
    return (
      <div style={{ marginTop: 10 }} className={className_1}>
        <div className={className_2}></div>
        <h1>{this.state.test}</h1>
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
