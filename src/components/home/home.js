import React, { Component } from "react";
import Sphere from "../sphere";
import { Link } from "react-router-dom";
import "./home.scss";

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
        <div>
          <h1 className="home1 text-flicker-in-glow">Hey</h1>
          <h1 className="home2 tracking-in-expand">This is Downhill Studios</h1>
          <h1 className="home3 swing-in-top-fwd">
            Really enjoy making beautiful websites, ecommerce and apps
          </h1>
          <Link to={"/contact-me"} className="mylink">
            <div className="myBtnContact swing-in-top-fwd">Contact Us</div>
          </Link>
        </div>

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
