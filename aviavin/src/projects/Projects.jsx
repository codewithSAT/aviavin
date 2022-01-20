import React from 'react';
import { projectsData } from '../data';
import img from '../assets/4g1.jpg';
import './projectStyles.css';

const Projects = () => {
  console.log(projectsData);
  return (
    <div className="projects">
      {projectsData.map((project) => (
        <div className="project" key={project.id}>
          <img src={img} alt="Smiley face" className="projectImage"></img>
          <div className="projectContent">
            <h2>{project.projectname}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
