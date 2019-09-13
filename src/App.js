import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/portfolio";
import Home from "./components/home";
import Contact from "./components/contact/contact";
import About from "./components/about";
import Skills from "./components/skills/skills";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="contenitore">
          <Navbar></Navbar>
          <div className="main" onClick={this.hideNav}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact-me" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//qui dentro si trovano la navbar e il router con le transizioni
