import React from "react";
import "./AddSpotForm.css";

const AddSpotForm = props => (
<div className="card w-75 mt-5 mx-auto p-4" id="add-a-spot">
    <form>
    <div className = "input form-group">
        <label className="mr-3" htmlFor="location">Location Name</label>
          <input onChange={props.handleChange} className="form-control" placeholder = "Location Name" type="text" id="locationName" name="locationName" required/>
     </div>

    <div className = "input form-group">
        <label className="mr-3" htmlFor="announcement">Please rank the following fields from 1-5, 1 being the worst 5 being the best.</label>
     </div>
     <div className = "input form-group">
        <label htmlFor="customRange1">Noise Rating: {props.noiseRating}</label>
            <input type="range" onChange={props.handleChange} className="custom-range" defaultValue="3" min="1" max="5" name = "noiseRating" id="customRange1"/>
     </div>
     <div className = "input form-group">
        <label htmlFor="customRange1">Outlet Availability: {props.outletRating}</label>
            <input type="range" onChange={props.handleChange} className="custom-range" defaultValue="3" min="1" max="5" name = "outletRating" id="customRange2"/>
     </div>
     <div className = "input form-group">
        <label htmlFor="customRange1">Wifi Strength: {props.wifiRating}</label>
            <input type="range" onChange={props.handleChange} className="custom-range" defaultValue="3" min="1" max="5" name = "wifiRating" id="customRange3"/>
     </div>
     <div className = "input form-group">
     <label htmlFor="customRange1">Available Seating: {props.seatingRating}</label>
            <input type="range" onChange={props.handleChange} className="custom-range" defaultValue="3" min="1" max="5" name = "seatingRating" id="customRange4"/>
     </div>
     <div className = "input form-group">
     <label htmlFor="customRange1">Food&Drinks: {props.fDRating}</label>
            <input type="range" onChange={props.handleChange} className="custom-range" defaultValue="3" min="1" max="5" name = "fDRating" id="customRange5"/>
     </div>
     
        <button onClick={props.formSubmission} type="submit" className="btn btn-secondary">Submit</button>
    </form>
</div>
)
export default AddSpotForm;