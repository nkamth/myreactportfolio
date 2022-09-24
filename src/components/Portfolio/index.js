import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "jokr",
      description:
        "Team collaboration utilizing MVC, with sequelize, mySql, JawsDB/Heroku, express, node.js, handlebars.",
      github: "https://github.com/nkamth/jokr",
      link: "https://damp-bastion-89209.herokuapp.com/",
    },
    {
      title: "note-taker",
      description:
        "Note application. Utilizes express.js and published to Heroku.",
      github: "https://github.com/nkamth/note-taker",
      link: "https://note-taker-js-nk.herokuapp.com/",
    },
    {
      title: "Futurama Character Search",
      description:
        "Team collaboration utilizing materialize css, and API calls to create a character-search app. Displays the voice-actors behind the characters of Futurama, an animated TV series.",
      github: "https://github.com/nkamth/character-search",
      link: "https://roo116.github.io/character-search/",
    },
    {
      title: "Work-Day Scheduler",
      description:
        "Utilized JQuery, localStorage and Third-party utilities to create a scheduling application.",
      github: "https://github.com/nkamth/Work-Day-Scheduler",
      link: "https://nkamth.github.io/Work-Day-Scheduler/",
    },
    {
      title: "Password-Generator",
      description:
        "Randomly generates a password that meets the criteria selected by the user SO THAT a strong password is created that provides greater security.",
      github: "https://github.com/nkamth/Password-Generator",
      link: "https://nkamth.github.io/Password-Generator/",
    },
    {
      title: "Resume-Builder",
      description:
        "This collaborative project provides a user with a simple application to create a resume. ",
      github: "https://github.com/chrisdhodges12/resume-builder",
      link: "https://salty-wildwood-94158.herokuapp.com/",
    },
  ];
  return (
    <section id="projects">
      <div className="center">
        <h2 className="page-header">Portfolio</h2>
      </div>
      <div className="flex-row space-around">
        {projects.map((project, i) => (
          <div className="card" key={project.title}>
            <div className="image">
              <img
                src={require(`../../assets/Projects/${i}.png`)}
                alt={project.title}
              />
            </div>
            <h3 style={{ textAlign: "center" }}>{project.title}</h3>
            <p className="card-body" style={{ justifyContent: "center" }}>
              {project.description}
            </p>
            <div
              className="card-links flex-column"
              style={{ alignItems: "center" }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "border", color: "orange" }}
              >
                GitHub Link
              </a>
              <br></br>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "dotted", color: "lightorange" }}
              >
                Deployed Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
