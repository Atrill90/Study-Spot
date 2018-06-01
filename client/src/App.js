import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "../components/Users/Registration";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Register" component={Registration} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
