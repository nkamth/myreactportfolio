import React from "react";

const Resume = () => {
  return (<section>
    <div className="center">
      <h2 className="page-header">My Resume</h2>
    </div>
    <div className="bottom-spacing">
      <a href={require("../../assets/files/namithaCV.docx")} download>
        <h2>Download my Resume</h2>
      </a>
    </div>
    <div>
      <h5>Front-End Proficiencies</h5>
      <ol>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ol>
      <br></br>
      <h5>Back-End Proficiencies</h5>
      <ol>
        <li>APIs</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Model View Controller (MVC)</li>
        <li>REST</li>
        <li>Progressive Web Applications (PWA)</li>
      </ol>
      <br></br>
      <h5>Dev Tool Proficiencies</h5>
      <ol>
        <li>Git</li>
        <li>npm</li>
        <li>Jest</li>
        <li>Webpack</li>
      </ol>
      <br></br>
      <h5>Database Proficiencies</h5>
      <ol>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ol>
    </div>
  </section>);
};

export default Resume;
