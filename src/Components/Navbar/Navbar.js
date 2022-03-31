import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar space-between">
      <span className="left space-between">
        <h3 className="third-heading company-logo">
          <Link to="/">Quizzy</Link>
        </h3>
        <i className="fas fa-search"></i>
      </span>
      <div className="navIcons">
        <div className="icon-Badge center">
          <Link to="/">
            <i className="far fa-heart"></i>
          </Link>
        </div>

        <button className="log">
          <Link to="/">Log In</Link>
        </button>

        <button className="log">
          <Link to="/">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
