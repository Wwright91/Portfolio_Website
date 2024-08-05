import React from "react";
import { NavLink } from "react-router-dom";
const hero = "../../wisdom-wright.jpeg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__content">
        <img src={hero} alt="Wisdom Wright" />
        <div className="Home__title">
          <span className="first-name">
            {"Wisdom".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char}
              </span>
            ))}
          </span>
          <span className="last-name">
            {"Wright".split("").map((char, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
      <blockquote className="Home__quote">
        Coding: where you can make a million mistakes and still be a hero.
      </blockquote>
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
