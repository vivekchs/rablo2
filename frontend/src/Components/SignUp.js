// src/Signup.js
import React, { useState } from "react";
import "./Signup.css";

import { useNavigate } from "react-router";

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async() => {

    const result = await fetch('http://localhost:8000/signup', {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json' ,
      },
      body: JSON.stringify({
        name, 
        email,
        password
      })
    })


     navigate('/login')
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
