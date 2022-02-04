import React from 'react';
import { projectsData } from '../data';
import img1 from '../assets/droneDelivery.jpg';
import img2 from '../assets/skyDrone.jpg';
import './projectStyles.css';

const Projects = () => {
  const images = [img1, img2, img1, img2, img1, img2];

  return (
    <div className="projects">
      {projectsData.map((project) => (
        <div
          className="project"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)) ,url(${
              images[project.count - 1]
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          key={project.id}
        >
          <h1>{project.projectname}</h1>
          <div className="projectContent">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
