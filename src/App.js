import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Portfolio from "./components/portfolio";
import Home from "./components/home";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="contenitore">
              <div className="mynavbar">
                <Link to={"/"} className="mylink">
                  LOGO
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
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 800, exit: 40 }}
                    classNames={"fade"}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/portfolio" component={Portfolio} />
                      <Route path="/contact-me" component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;

//qui dentro si trovano la navbar e il router con le transizioni
