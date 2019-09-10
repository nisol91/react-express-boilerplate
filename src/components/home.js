import React, { Component } from "react";
import Sphere from "./sphere";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cubeVisibility: false
    };
  }
  notify = () => toast("Scroll to zoom and drag to move!");

  //cosi controllo la durata del caricamento

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cubeVisibility: true });
      this.notify();
    }, 1500);
  }
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
        <div className={`fade-in ${this.state.cubeVisibility && "visible"}`}>
          <Sphere></Sphere>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  }
}
