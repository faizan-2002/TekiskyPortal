import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <img src={logo} alt="logo" className="img-logo" />
          </NavLink>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <NavLink
                to="/"
                activeClassName="active"
                exact
                className="navbar-link"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/courses"
                activeClassName="active"
                className="navbar-link"
              >
                Courses
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="navbar-link"
              >
                AboutUs
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="navbar-link"
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          <Link to="/download" className="btn-download">
            Download
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
