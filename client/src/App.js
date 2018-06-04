import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./pages/Registration";
import Landing from "./pages/Landing";
import AddSpot from "./pages/AddSpot";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Login from "./pages/Login"
const App = () => (
 
      <Router>  
        <div>
          <Navbar/>
             <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/Register" component={Registration} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/AddSpot" component={AddSpot} /> 
            {/* <Route component={NoMatch} /> */}
            </Switch>
          <Footer/>
      </div>
    </Router>
  
      )

export default App;
