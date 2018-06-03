import React, { Component } from "react";
import "./RegistrationForm.css";

const RegistrationForm = props => (
  <div className="card w-75 mt-5 mx-auto p-4">
   <form  action="http://localhost:3000/auth/users" method = "POST">
      <div className = "input form-group">
        <label className="mr-3" htmlFor="email">E-mail</label>
          <input  className="form-control" placeholder = "Email" type="email" id="email" name="email"/>
     </div>

      <div className = "input form-group">
        <label htmlFor="firstName">First Name</label>
          <input  className="form-control" type="text" placeholder = "First Name" id="firstName" name="firstName"/>
     </div>

      <div className = "input form-group">
       <label htmlFor="lastName">Last Name</label>
          <input  className="form-control" type="text" id="lastName" placeholder = "Last Name"name="lastName"/>
     </div>

      <div className = "input form-group">
       <label htmlFor="userName">Username</label>
          <input  className="form-control" type="text" placeholder = "Username" id="userName" name="userName"/>
     </div>

    <div className = "input form-group">
      <label htmlFor="password">Password</label>
          <input className="form-control" type="password" placeholder = "Password"  id="password" name="password"/>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  </div>
)

export default RegistrationForm;