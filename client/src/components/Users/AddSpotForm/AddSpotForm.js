import React, { Component } from "react";
import "./AddSpotForm.css";

const AddSpotForm = props => (
<div className="card w-75 mt-5 mx-auto p-4">
    <form>
    <div className = "input form-group">
        <label className="mr-3" htmlFor="location">Location Name</label>
          <input  onChange={props.handleChange} className="form-control" placeholder = "Location Name" type="text" id="locationName" name="locationName"/>
     </div>

     <div className = "input form-group">
        <label className="mr-3" htmlFor="address">Address</label>
          <input  onChange={props.handleChange} className="form-control" placeholder = "Address"        type="text" id="address" name="address"/>
     </div>
     <div className = "input form-group">
        <label className="mr-3" htmlFor="city">City</label>
          <input  onChange={props.handleChange} className="form-control" placeholder = "Address" type="text" id="address" name="address"/>
     </div>
     

        <button onClick={props.formSubmission} type="submit" className="btn btn-secondary">Submit</button>
    </form>
</div>
)