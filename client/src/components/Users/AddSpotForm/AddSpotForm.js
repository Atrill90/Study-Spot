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
     <div className = "input form-group">
        <label className="mr-3" htmlFor="email">Noise Rating</label>
          <input  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="1"/>1 
          <input  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="2"/>2
          <input  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="3"/>3
          <input  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="4"/>4
          <input  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="5"/>5
     </div>
     <div className = "input form-group">
        <label className="mr-3" htmlFor="email">Outlet Availability</label>
          <input  className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="1"/>1
          <input  className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="2"/>2
          <input  className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="3"/>3
          <input  className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="4"/>4
          <input  className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="5"/>5 
     </div>
     <div className = "input form-group">
        <label className="mr-3" htmlFor="email">Wifi Strength</label>
          <input  className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="1"/>1
          <input  className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="2"/>2
          <input  className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="3"/>3
          <input  className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="4"/>4
          <input  className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="5"/>5 
     </div>
     

        <button type="submit" className="btn btn-secondary">Submit</button>
    </form>
</div>
)
export default AddSpotForm;