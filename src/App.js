import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { spring, AnimatedSwitch } from "react-router-transition";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PageTransition from "react-router-page-transition";

import Create from "./components/create";
import Portfolio from "./components/portfolio";

import Edit from "./components/edit";
import Index from "./components/index";
import Singleelement from "./components/singleelement";

//========FUNZIONI PER LE TRANSIZIONI DI PAGINA=========
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};
//==========================

class App extends Component {
  render() {
    return (
      <Router>
        <div className="contenitore">
          <div className="mynavbar">
            <Link to={"/"} className="mylink">
              \\\\\\\\\\\\\
            </Link>
            <Link to={"/"} className="mylink">
              Home
            </Link>
            <Link to={"/portfolio"} className="mylink">
              Portfolio
            </Link>
            <Link to={"/contact-me"} className="mylink">
              Contact Me
            </Link>
          </div>
          <div className="main">
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/create" component={Create} />

              <Route path="/edit/:id" component={Edit} />
              <Route path="/singleelement/:id" component={Singleelement} />
              <Route path="/index" component={Index} />
            </AnimatedSwitch>
          </div>
          {/* <div className="footer">footer</div> */}
        </div>
      </Router>
    );
  }
}

export default App;
