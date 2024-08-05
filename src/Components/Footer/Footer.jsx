import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__social-links">
        <a
          href="https://www.linkedin.com/in/wisdom-wright/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/Wwright91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
            alt="GitHub"
          />
        </a>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0X23aMdxKz6KqPT1B55LxcRugiHm5j_j3n6nAE5lBxKX91jZeiyZx-tcB2x_HpcJ186VDBH7Q1?gv=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=pE97I4t7Il9M&format=png&color=000000"
            alt="Contact"
          />
        </a>
        <a
          href="https://docs.google.com/document/d/10yjZx1vyooFAKeHm8NuqF8snEEE41LRwTPyOB2b-K_8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__resume"
        >
          <img
            src="https://img.icons8.com/?size=100&id=44091&format=png&color=000000"
            alt="Resume"
          />
        </a>
      </div>

      <div className="Footer__info">
        <p>
          &copy; {new Date().getFullYear()} Wisdom Wright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
