import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import RegistrationForm from "../../components/Users/RegistrationForm"
import API from "../../utils/API"

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
   let name = event.target.name;
   let value = event.target.value;

    this.setState({[name]: value});

}

formSubmission = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    console.log("hello there");
    this.setState({[name]:value});
    this.userCreate();
    
}

userCreate = () => {
    console.log("new user's data goes here!");
    let user ={
        email :this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password
    }
    API.saveUser(user).then(res =>{
        console.log(res);
        
    }
        
    ).catch(err =>{
        console.log(err);
    
    })
}


render() {
    return (
      <div>
          <Container>
              <h1 className= "text-center"> Registration </h1>
       <RegistrationForm
       formSubmission = {this.formSubmission}
       handleChange = {this.handleChange}
       />
       </Container>
        </div>
    );
  }
  

}
export default Registration;

// const Registration= () => (
//     <div>
//     <Container>
//         <h1 class= "text-center"> Registration </h1>
//         <RegistrationForm/>
//     </Container>
//   </div>
//     );
