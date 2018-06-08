import React from "react";
import "./LoginForm.css";

const LoginForm = props => (
<div className="card w-75 mt-5 mx-auto p-4">
    <form>
    <div className = "input form-group">
       <label htmlFor="userName">Username</label>
          <input onChange={props.handleChange} className="form-control"  type="text" placeholder = "Username" id="loginUserName" name="loginUserName"/>
     </div>

     <div className = "input form-group">
       <label htmlFor="userName">Password</label>
          <input onChange={props.handleChange} className="form-control" type="password" placeholder = "Password" id="loginPassword" name="loginUserName"/>

     </div>
     <button onClick={props.formSubmission} type="submit" className="btn btn-secondary">Submit</button>
</form>
 </div>
)

export default LoginForm;