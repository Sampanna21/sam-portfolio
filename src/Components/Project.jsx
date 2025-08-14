import React from 'react';
import projects from './Data/project.json';

const Projects = () => (
  <div className="container">
    <h1>Projects</h1>
    <div className="projects">
      {projects.map((project) => (
        <div className="project-item" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">_ _ _ _ _ </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
