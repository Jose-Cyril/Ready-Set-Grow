import React, { Component } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images2/NavBar/Ready-Set-Grow_Logo 1.png";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-menu">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="first-three-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-links">
                About us
              </Link>
            </li>
          </div>
          <div className="two-last-menu">
            <li className="nav-learn-more">
              <Link to="/learn-more" className="nav-links">
                Learn More
              </Link>
            </li>
            <li className="nav-register-now">
              <Link to="/register-now" className="nav-links-register">
                Register Now
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}
