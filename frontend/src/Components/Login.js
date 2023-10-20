// src/Login.js
import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async() => {

     let result = await fetch('http://localhost:8000/login', {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json' ,
      },
      body: JSON.stringify({ 
        email,
        password
      })
    })

    result = await result.json();

    // console.log(result);
    // console.log(result.name);
    // console.log(result[0].name)

    try {
      if (result[0].name) {
        localStorage.setItem('login', 1);
        navigate('/');
      }
    }
    catch {
      alert("please enter correct details");
      navigate('/login');
    }

  };
 

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
