import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";

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
    let className_1 = "boxPortfolio";
    if (this.state.slide) {
      className_1 += " ";
    }
    return (
      <div className={className_1}>
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
