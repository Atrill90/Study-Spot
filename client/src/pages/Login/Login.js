import React, { Component } from "react";
import { Container } from "../../components/Grid";
import LoginForm from "../../components/Users/LoginForm"
import API from "../../utils/API";

class Login extends Component {
    constructor(props){
        super()
        this.state = {
            loginUserName: "",
            loginPassword: ""
        };
        this.handleChange=this.handleChange.bind(this);
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
        console.log("form submission works");
        this.setState({[name]:value});
        this.loginRequest();
    }

    loginRequest = () => {
        console.log("we are loggin in");
        API.loginUser({
            userName: this.state.loginUserName,
            password: this.state.loginPassword
        }).then(foundUser =>{
            console.log(foundUser);
            window.location.href ="/spots"
        })
    }


    render() {
        return (
            <Container fluid>
                <h1 className= "text-center"> Login </h1>
                <LoginForm
                formSubmission = {this.formSubmission}
                handleChange = {this.handleChange}
                />
             </Container>
        );
      }
}
    export default Login;