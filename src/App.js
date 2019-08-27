import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create";
import Portfolio from "./components/portfolio";

import Edit from "./components/edit";
import Index from "./components/index";
import Singleelement from "./components/singleelement";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              \\\\\\\\\\\\\
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/portfolio"} className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact-me"} className="nav-link">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <h2>react crud</h2> <br />
          <div className="main">
            <TransitionGroup className="transition-group">
              <CSSTransition
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
              >
                <Switch>
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/create" component={Create} />

                  <Route path="/edit/:id" component={Edit} />
                  <Route path="/singleelement/:id" component={Singleelement} />
                  <Route path="/index" component={Index} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div className="footer">footer</div>
        </div>
      </Router>
    );
  }
}

export default App;
