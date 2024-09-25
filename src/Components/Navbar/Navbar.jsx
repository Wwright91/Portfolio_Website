import React from "react";
import { NavLink } from "react-router-dom";
const hero = "../../ww-logo.jpeg";

import "./Navbar.scss";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Navbar">
      <img 
        src={hero} 
        alt="hero" 
        onClick={scrollToTop} 
        style={{ cursor: "pointer" }} 
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-center">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
