import React from "react";
import { NavLink } from "react-router-dom";
const hero = "../../../public/ww-logo.jpeg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">
        <img src={hero} alt="hero" />
      </NavLink>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
