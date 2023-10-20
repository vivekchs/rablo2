// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  let islogin = localStorage.getItem("login");

  console.log(islogin);

  const handlelogout = () => {
    localStorage.setItem("login", 0);
    navigate("/signup");
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Rablo.in</Link>
        </li>
        <li>
          {islogin==1 ? (
            <div className="list">
            <Link to="/addproduct">AddProduct</Link>
            <Link to="/displayproduct">Displayproduct</Link>
            <button onClick={handlelogout}>Logout</button>
            </div>
          ) : (
            <div className="list">
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
