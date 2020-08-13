import React from "react"
import "./Login.css"
import {  Loginurl } from "./spotify"

function Login() {
  return   (
    <div className="Login">
       
    <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
     alt=""
     />
    <button href={Loginurl}>LOGIN WITH SPOTIY</button>
    </div>

  );
}
export default Login;
