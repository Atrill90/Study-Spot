import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import LoginForm from "../../components/Users/LoginForm"

const Login= () => (
    <div>
    
     <Container fluid>
     <h1 class= "text-center"> Login </h1>
      <LoginForm/>
      </Container>
      </div>
    );

    export default Login;