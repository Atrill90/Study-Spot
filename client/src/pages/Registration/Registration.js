import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import RegistrationForm from "../../components/Users/RegistrationForm"

class Registration extends Component {
    constructor (){
    super()
    this.state = {
      email: "",
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

render() {
    return (
      <div>
          <Container>
              <h1 class= "text-center"> Registration </h1>
       <RegistrationForm/>
       </Container>
        </div>
    );
  }
  

}

export default Registration;
