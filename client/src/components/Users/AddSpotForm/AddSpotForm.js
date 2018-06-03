import React, { Component } from "react";
import "./AddSpotForm.css";

const AddSpotForm = props => (
<div className="card w-75 mt-5 mx-auto p-4">
    <form>
    <div className = "input form-group">
        <label className="mr-3" htmlFor="location">Location Name</label>
          <input className="form-control" placeholder = "Location Name" type="text" id="locationName" name="locationName"/>
     </div>

    <div className = "input form-group">
        <label className="mr-3" htmlFor="email">E-mail</label>
          <input  className="form-control" placeholder = "Email" type="email" id="email" name="email"/>
     </div>
     

        <button type="submit" className="btn btn-secondary">Submit</button>
    </form>
</div>
)