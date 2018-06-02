import React, { Component } from "react";
import "./LoginForm.css";

const LoginForm = props => (
<div class="card w-75 mt-5 mx-auto p-4">
    <form action="/auth/login" method = "POST">

    <div className = "input form-group">
       <label for="userName">Username</label>
          <input  className="form-control"  type="text" placeholder = "Username" id="loginUserName" name="loginUserName"/>
     </div>

     <div className = "input form-group">
       <label for="userName">Password</label>
          <input  className="form-control"   type="password" placeholder = "LoginUserName" id="loginPassword" name="loginUserName"/>

     </div>
     <button type="submit" class="btn btn-secondary">Submit</button>




</form>
 </div>
)

export default LoginForm;