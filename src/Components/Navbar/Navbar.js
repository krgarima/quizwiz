import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";

export default function NavBar() {
  const { logged } = useContext(AuthContext);
  return (
    <div className="navbar space-between">
      <span className="left space-between">
        <h3 className="third-heading company-logo">
          <Link to="/">Quizwiz</Link>
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
          {!logged ? (
            <Link to="/login">Log In</Link>
          ) : (
            <Link to="/login">Log Out</Link>
          )}
        </button>

        <button className="log">
          <Link to="/">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
