import React, { Component } from "react";
import "./AddSpotForm.css";

const AddSpotForm = props => (
<div className="card w-75 mt-5 mx-auto p-4">
    <form>
    <div className = "input form-group">
        <label className="mr-3" htmlFor="location">Location Name</label>
          <input onChange={props.handleChange} className="form-control" placeholder = "Location Name" type="text" id="locationName" name="locationName" required/>
     </div>

    <div className = "input form-group">
        <label className="mr-3" htmlFor="announcement">Please rank the following fields from 1-5, 1 being the worst 5 being the best.</label>
     </div>
     <div className = "input form-group">
        <label className="mr-5" htmlFor="noise">Noise Rating</label>
          <input onChange={props.handleChange} className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="1"/>1 
          <input onChange={props.handleChange} className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="2"/>2
          <input onChange={props.handleChange} className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="3"/>3
          <input onChange={props.handleChange} className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="4"/>4
          <input onChange={props.handleChange}  className="noiseR mr-1 ml-3" type="radio"  name="noiseRating" value ="5"/>5
     </div>
     <div className = "input form-group">
        <label className="mr-3" htmlFor="outlet">Outlet Availability</label>
          <input onChange={props.handleChange} className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="1"/>1
          <input onChange={props.handleChange} className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="2"/>2
          <input onChange={props.handleChange} className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="3"/>3
          <input onChange={props.handleChange} className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="4"/>4
          <input onChange={props.handleChange} className="outletR mr-1 ml-3" type="radio"  name="outletRating" value ="5"/>5 
     </div>
     <div className = "input form-group">
        <label className="mr-5" htmlFor="wifi">Wifi Strength</label>
          <input onChange={props.handleChange} className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="1"/>1
          <input onChange={props.handleChange} className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="2"/>2
          <input onChange={props.handleChange} className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="3"/>3
          <input onChange={props.handleChange} className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="4"/>4
          <input onChange={props.handleChange} className="wifiR mr-1 ml-3" type="radio"  name="wifiRating" value ="5"/>5 
     </div>
     <div className = "input form-group">
        <label className="mr-4" htmlFor="seating">Available Seating</label>
          <input onChange={props.handleChange} className="seatingR mr-1 ml-2" type="radio"  name="seatingRating" value ="1"/>1
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="seatingRating" value ="2"/>2
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="seatingRating" value ="3"/>3
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="seatingRating" value ="4"/>4
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="seatingRating" value ="5"/>5 
     </div>
     <div className = "input form-group">
        <label className="mr-5" htmlFor="seating">Food&Drinks</label>
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="fDRating" value ="1"/>1
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="fDRating" value ="2"/>2
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="fDRating" value ="3"/>3
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="fDRating" value ="4"/>4
          <input onChange={props.handleChange} className="seatingR mr-1 ml-3" type="radio"  name="fDRating" value ="5"/>5 
     </div>
     
        <button onClick={props.formSubmission} type="submit" className="btn btn-secondary">Submit</button>
    </form>
</div>
)
export default AddSpotForm;