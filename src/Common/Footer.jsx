// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <Link to="https://www.instagram.com">
            <img src="instagram.png" alt="Instagram" />
          </Link>
          <Link to="https://www.twitter.com">
            <img src="twitter.png" alt="Twitter" />
          </Link>
          <Link to="https://www.facebook.com">
            <img src="facebook.png" alt="Facebook" />
          </Link>
          <Link to="https://www.linkedin.com">
            <img src="linkedin.png" alt="LinkedIn" />
          </Link>
        </div>
        <div className="address">
          <p>123 Street Name, City, Country</p>
        </div>
        <div className="quick-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
