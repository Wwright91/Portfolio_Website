import React from "react";
import "./Skills.scss";

const allSkills = [
  {
    name: "JavaScript",
    logo: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "React",
    logo: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Node.js",
    logo: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "HTML",
    logo: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  { name: "CSS", logo: "https://img.icons8.com/color/48/000000/css3.png" },
  { name: "Sass", logo: "https://img.icons8.com/color/48/000000/sass.png" },
  {
    name: "Firebase",
    logo: "https://img.icons8.com/color/48/000000/firebase.png",
  },
  {
    name: "React Router",
    logo: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Express.js",
    logo: "https://img.icons8.com/color/48/000000/express-js.png",
  },
  { name: "REST API", logo: "https://img.icons8.com/color/48/000000/api.png" },
  {
    name: "ElephantSQL",
    logo: "https://img.icons8.com/color/48/000000/sql.png",
  },
  { name: "Git", logo: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "GitHub", logo: "https://img.icons8.com/color/48/000000/github.png" },
  { name: "Npm", logo: "https://img.icons8.com/color/48/000000/npm.png" },
  { name: "Trello", logo: "https://img.icons8.com/color/48/000000/trello.png" },
  { name: "Figma", logo: "https://img.icons8.com/color/48/000000/figma.png" },
  {
    name: "Material-UI",
    logo: "https://img.icons8.com/color/48/000000/material-ui.png",
  },
  {
    name: "Bootstrap",
    logo: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
];

const Skills = () => {
  return (
    <section className="Skills">
      <h2 className="Skills__title">Skills</h2>
      <div className="Skills__container">
        {allSkills.map((skill) => (
          <div key={skill.name} className="Skills__item">
            <img src={skill.logo} alt={skill.name} className="Skills__logo" />
            <p className="Skills__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
