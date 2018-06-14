import React from "react";
import "./Navbar.css";
const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand mr-auto" href="/">
      <i className="fas fa-book theGoldenOne ml-3"></i>
      </a>
      <a className="navbar-brand ml-auto" href="/Spots">
        Spots
      </a>
      <a className="navbar-brand" href="/AddSpot">
        Add a Spot
      </a>
      <a className="navbar-brand" href="/Register">
        Register
      </a>
      <a className="navbar-brand" href="/Login">
        Login
      </a>
    </nav>
)
export default Navbar;