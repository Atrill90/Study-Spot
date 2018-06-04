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
      location: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: ""
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
    console.log(this.state.email, this.state.firstName, this.state.lastName, this.state.userName, this.state.password);
    this.userCreate();
}

spotCreate = () => {
    console.log("new user's data goes here!");
    let email  = this.state.email;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let userName = this.state.userName;
    let password = this.state.password;
    let body = {email: email, firstName: firstName, lastName: lastName, password: password}
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