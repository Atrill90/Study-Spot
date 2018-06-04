import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
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
    console.log(event.target.value);
    console.log(event.target.name)
    this.setState({[event.target.name]: [event.target.value]});
    // console.log(this.state.edate);
}

formSubmission = event => {
    event.preventDefault();
    console.log("hello there");
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.locationName, this.state.noiseRating, his.state.outletRating, this.state.wifiRating, this.state.seatingRating);
    this.spotCreate();
}

spotCreate = () => {
    console.log("new user's data goes here!");
    let locationName  = this.state.locationName;
    let noiseRating = this.state.noiseRating;
    let outletRating = this.state.outletRating;
    let wifiRating = this.state.wifiRating;
    let seatingRating = this.state.seatingRating;
    let body = {locationName: locationName, noiseRating: noiseRating, outletRating: outletRating, wifiRating: wifiRating, seatingRating: seatingRating}
    console.log(body);
    API.saveSpot(body).then(res =>{
        console.log(res);
        console.log(`Hello`);
    }
        
    ).catch(err =>{
        console.log(err);
        console.log(`errors anyone?`);
    })
}
render() {
    return (
      <div>
          <Container>
              <h1 className= "text-center"> Add a Spot! </h1>
       <AddSpotForm
       formSubmission = {this.formSubmission}
       handleChange = {this.handleChange}
       />
       </Container>
        </div>
    );
}
}
export default AddSpot;