// filepath: f:\My Projects\React_sam_portfolio\sam_portfolio\src\Components\Skills.jsx
import React from 'react';
import skills from './Data/skills.json';

const Skills = () => (
  <div className="container">
    <h1>Skills</h1>
    <div className="skills">
      {skills.map((data) => (
        <div className="items" key={data.id}>
          <div className="item">
            <h3>{data.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;