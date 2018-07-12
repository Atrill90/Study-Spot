import React from "react";
import "./Navbar.css";
const axios = require("axios");
const Navbar = () =>{
    const logout = (e) => {
      axios.get("auth/users/logout").then(
        window.location.href ="/spots"
      )
    }
    return(
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand mr-auto" href="/">
        <i className="fas fa-book theGoldenOne ml-3"></i>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ml-auto">
          <a className="navbar-brand nav-item ml-auto" href="/Spots">
            Spots
          </a>
          <a className="navbar-brand nav-item ml-auto" href="/AddSpot">
            Add a Spot
          </a>
        </div>
      </div>
       {/*<a className="navbar-brand" href="/Register">
        Register
      </a>
       <a className="navbar-brand" href="/Login">
        Login
      </a>  */}
      {/* <a className="navbar-brand" href="/Spots">
        Logout
      </a> */}
    </nav>
    )
  }
export default Navbar;