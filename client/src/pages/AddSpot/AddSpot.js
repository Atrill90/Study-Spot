import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./AddSpot.css";
import AddSpotForm from "../../components/AddSpotForm"
import API from "../../utils/API"

class AddSpot extends Component {
    constructor (props){
    super(props)
    this.state = {
      locationName: "",
      noiseRating: 3,
      outletRating: 3,
      wifiRating: 3,
      seatingRating: 3,
      fDRating:3
      
    };
    this.handleChange= this.handleChange.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
}

updateTextInput = val => {
    document.querySelector('noiseDisplay').value=val; 
  }

handleChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
    // console.log(this.state.edate);
}

formSubmission = event => {
    event.preventDefault();
    
    this.setState({[event.target.name]: event.target.value});
    // console.log(this.state.locationName, this.state.noiseRating, this.state.outletRating, this.state.wifiRating, this.state.seatingRating);
    this.spotCreate();
}

spotCreate = () => {
    console.log("new spot data goes here!");
    API.saveSpot({        
        locationName: this.state.locationName,
        noiseRating: this.state.noiseRating,
        outletRating: this.state.outletRating,
        wifiRating: this.state.wifiRating,
        seatingRating: this.state.seatingRating,
        fDRating: this.state.fDRating
    }).then(res =>{
       if(res.data.errors){
        document.getElementById("locationName").value = "";
        document.getElementsByClassName("radioButton").value = 0;
        alert("This spot exists already, please try again")
       }else {
        alert("Successful addition! Go check it out on the spots page!")
         
       }
    }
        
    ).catch(err =>{
        console.log(err);
        console.log(`errors anyone?`);
    })
}
render() {
    return (
        <Container>
            <h1 className= "text-center pt-5"> Add a Spot! </h1>
            <AddSpotForm
                 formSubmission = {this.formSubmission}
                 handleChange = {this.handleChange}
                 noiseRating = {this.state.noiseRating}
                 outletRating = {this.state.outletRating}
                 wifiRating = {this.state.wifiRating}
                 seatingRating = {this.state.seatingRating}
                 fDRating = {this.state.fDRating}
            />
       </Container>
    );
}
}
export default AddSpot;