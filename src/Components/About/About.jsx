import React from "react";
import "./About.scss";
import Skills from "../Skills/Skills"

const About = () => {
  return (
    <section className="About">
      <div className="About__container">
        <h2 className="About__title">About Me</h2>
        <p className="About__description">
          I am a dedicated Software Engineer specializing in full-stack web development. My commitment to continuous learning keeps me updated with the latest industry trends and best practices. I enjoy solving coding challenges and currently have over 6000 points on <a href="https://pursuit.codetrack.dev/fellow/592" target="_blank" rel="noopener noreferrer">CodeTrack</a>.
        </p>
        <p className="About__description">
          I love web development and enjoy creating projects that address real-world problems. Outside of coding, I have a keen interest in trying new foods and cooking, which fuels my creativity. I also enjoy solving sudoku puzzles and reading in my spare time.
        </p>
        <Skills/>
      </div>
    </section>
  );
};

export default About;
