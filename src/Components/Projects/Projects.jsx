import React from "react";
import "./Projects.scss";

const projects = [
  {
    title: "Youtube Clone",
    description:
      "A fully functional clone of YouTube that allows users to search, watch, and interact with videos. Developed using React and the YouTube API, this project replicates the core features of the popular platform, including video playback and search functionality. It's a great demonstration of front-end development skills and API integration.",
    image: "youtube-clone.jpeg",
    link: "https://youtube-clone-bo-wisdom.netlify.app/",
  },
  {
    title: "Budget App",
    description:
      "A user-friendly budgeting tool designed to help individuals manage their finances effectively. The app allows users to track income and expenses, categorize transactions. Developed with React and Express.js, the Budget App emphasizes simplicity and practicality for personal finance management.",
    image: "budget-app.jpeg",
    link: "https://budgetapp-ww.netlify.app/",
  },
  {
    title: "Melanated Diamonds",
    description:
      "A responsive e-commerce platform dedicated to showcasing and supporting Black-owned businesses. Developed with React and Express.js, the site features user authentication, a comprehensive product catalog, and secure login using Firebase. The app was a collaborative project focused on community empowerment and accessibility.",
    image: "melanated-diamonds-app.jpeg",
    link: "https://melanated-diamonds.netlify.app",
  },
  {
    title: "Sneakz",
    description:
      "A dynamic web app for sneaker enthusiasts to explore, add, and manage a collection of sneakers. Built with React, Express.js, and PostgreSQL, the app provides a smooth user experience with responsive design, a RESTful API, and a simulated checkout process. It's a must-visit for anyone passionate about sneakers..",
    image: "sneakz-app.jpeg",
    link: "https://sneakz-est-2023.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <h2 className="Projects__title">Projects</h2>
      <div className="Projects__container">
        {projects.map((project, index) => (
          <div key={index} className="Projects__card">
            <img
              src={project.image}
              alt={project.title}
              className="Projects__image"
            />
            <div className="Projects__info">
              <h3 className="Projects__title">{project.title}</h3>
              <p className="Projects__description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="Projects__link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
