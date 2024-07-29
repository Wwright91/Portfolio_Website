import React from "react";
import { NavLink } from "react-router-dom";
const hero = "../../../public/wisdom-wright.jpeg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <img src={hero} alt="Wisdom Wright" />
        <h1>Wisdom Wright</h1>
        <p>
          Fullstack Developer passionate about building impactful web
          applications
        </p>
      </div>
      <div className="Home__Buttons">
        <NavLink to="/about">
          <button>Learn More About Me</button>
        </NavLink>
        <NavLink to="/projects">
          <button>See My Work</button>
        </NavLink>
        <NavLink to="/contact">
          <button>Get In Touch</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
