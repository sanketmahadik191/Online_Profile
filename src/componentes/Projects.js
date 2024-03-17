import React, { useState } from 'react';
import data from '../data.json'; // Importing project data from data.json
import styles from './Projects.css';

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(data.ProjectsData);
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(data.ProjectsData);
    } else {
      const filtered = data.ProjectsData.filter(project => project.filter === filter);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className='projects'>
      <button onClick={() => handleFilterChange('All')}>All</button>
      <button onClick={() => handleFilterChange('Applications')}>Applications</button>
      <button onClick={() => handleFilterChange('Websites')}>Websites</button>
      <button onClick={() => handleFilterChange('Games')}>Games</button>

      <div className='project-list'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='project-list-box'>
            <div className='projects-head'>
                {project.filter}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>Preview</button>
            <button>Github</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
