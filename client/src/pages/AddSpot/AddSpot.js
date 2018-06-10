import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./AddSpot.css";
import AddSpotForm from "../../components/Users/AddSpotForm"
import API from "../../utils/API"

class AddSpot extends Component {
    constructor (props){
    super(props)
    this.state = {
      locationName: "",
      noiseRating: 0,
      outletRating: 0,
      wifiRating: 0,
      seatingRating: 0,
      fDRating:0
    };
    this.handleChange= this.handleChange.bind(this);
}



handleChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name)
    this.setState({[event.target.name]: [event.target.value]});
    // console.log(this.state.edate);
}

formSubmission = event => {
    event.preventDefault();
    
    this.setState({[event.target.name]: [event.target.value]});
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
        console.log(res);
        this.setState ({
            locationName: "",
            noiseRating: 0,
            outletRating: 0,
            wifiRating: 0,
            seatingRating: 0,
            fDRating:0
          });
          document.getElementById("locationName").value = "";
          document.getElementsByName("noiseRating").checked = false;
    }
        
    ).catch(err =>{
        console.log(err);
        console.log(`errors anyone?`);
    })
}
render() {
    return (
        <Container>
            <h1 className= "text-center"> Add a Spot! </h1>
            <AddSpotForm
                 formSubmission = {this.formSubmission}
                 handleChange = {this.handleChange}
            />
       </Container>
    );
}
}
export default AddSpot;