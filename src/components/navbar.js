import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo_2.png";
import home from "../img/chinese-house.svg";
import portfolio from "../img/view.svg";
import contact from "../img/letter.svg";
import skills from "../img/settings.svg";
import about from "../img/lego.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navSlide: false
    };
    this.closeNav = this.closeNav.bind(this);
  }
  closeNav() {
    console.log(this.navSlide);

    this.setState({ navSlide: true });
  }
  componentDidMount() {}
  render() {
    // ==handling css classes==
    let className_1 = "mynavbar";
    if (this.state.navSlide) {
      className_1 += " slideLeft";
    }
    return (
      <div className={className_1}>
        <div className="close-container" onClick={this.closeNav}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>
        <Link to={"/"} className="mylink">
          <img className="myLogo" src={logo} alt="" />
        </Link>
        <Link to={"/"} className="mylink">
          <h1 className="linkFont">Home</h1>
          <img className="homeIcon" src={home} alt="" />

          {/* <FontAwesomeIcon icon={faHome} className="homeIcon" /> */}
        </Link>
        <Link to={"/about"} className="mylink">
          <h1 className="linkFont">About</h1>
          <img className="homeIcon aboutIcon" src={about} alt="" />
        </Link>
        <Link to={"/skills"} className="mylink">
          <h1 className="linkFont">Skills</h1>
          <img className="homeIcon skillsIcon" src={skills} alt="" />
        </Link>
        <Link to={"/portfolio"} className="mylink">
          <h1 className="linkFont">Portfolio</h1>
          <img className="homeIcon portIcon" src={portfolio} alt="" />
        </Link>
        <Link to={"/contact-me"} className="mylink">
          <h1 className="linkFont">Contact Me</h1>
          <img className="homeIcon contIcon" src={contact} alt="" />
        </Link>
      </div>
    );
  }
}
