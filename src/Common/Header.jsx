import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Imges/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="main-logo">
          <Link to="/Home" className="navbar-item logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <Link to="/Home" className="navbar-item">
          Home
        </Link>
        <Link to="/courses" className="navbar-item">
          Courses
        </Link>
        <Link to="/events" className="navbar-item">
          Events
        </Link>
        <Link to="/blogs" className="navbar-item">
          Blogs
        </Link>
        <a href="/download" className="navbar-item download-button">
          Download App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
