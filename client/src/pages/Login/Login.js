import React, { Component } from "react";
import { Container } from "../../components/Grid";
import LoginForm from "../../components/Users/LoginForm"

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
        this.userCreate();
        
    }
    render() {
        return (
            <Container fluid>
                <h1 className= "text-center"> Login </h1>
                <LoginForm/>
             </Container>
        );
      }
}
    export default Login;