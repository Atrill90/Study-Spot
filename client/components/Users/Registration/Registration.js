import React, { Component } from "react";
import "./Registration.css";

const Registration = props => (
   <container>
   <form action="/submit" method = "POST">
    <div className = "input"/>
    <label for="email">E-mail</label>
    <input type="text" id="email" name="email"/>
    <div className = "input"/>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" name="firstName"/>
    <div className = "input"/>
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" name="lastName"/>
    <div className = "input"/>
    <label for="userName">Username</label>
    <input type="text" id="userName" name="userName"/>
    <div className = "input"/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password"/>
  </form>
  </container>
)

export default Registration;