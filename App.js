import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //LinkRoute,
  Redirect,
} from "react-router-dom";
import Catalog from "./pages/catalog";
import Sail from "./pages/sail.js";
import "./App.css";
import { Animates } from "./animations/animate";

class App extends Component {
  state = {};
  componentDidMount() {
    Animates();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/Demo" component={Catalog} />
            <Route path="/Sail" component={Sail} />
            <Redirect from="/" exact to="/Demo" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
