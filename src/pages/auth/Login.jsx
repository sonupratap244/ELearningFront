//import React from 'react';
import { useState } from "react";
import "./auth.css";
import {Link, useNavigate} from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const{btnLoading,loginUser} = UserData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async(e)=>{
    e.preventDefault();
    await loginUser(email,password,navigate);

  };

  return (
    <div className="auth-page">
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="enter your email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="password" required/>
            
                <button disabled={btnLoading} type="submit" className="common-btn">
                 {btnLoading ? "Please Wait..." : "Login"}
                  </button>
            </form>
            <p>
            You have no account? <Link to="/register">Register</Link>
            </p>
            <p><Link to="/forgot">Forgot Password?</Link></p>
        </div>
    </div>
  )
};

export default Login;