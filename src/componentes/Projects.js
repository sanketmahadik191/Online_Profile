import React, { useState } from 'react';
import data from '../data.json'; // Importing project data from data.json

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
    <div>
      {/* Filter buttons */}
      <button onClick={() => handleFilterChange('All')}>All</button>
      <button onClick={() => handleFilterChange('Applications')}>Applications</button>
      <button onClick={() => handleFilterChange('Websites')}>Websites</button>
      <button onClick={() => handleFilterChange('Games')}>Games</button>

      {/* Display filtered projects */}
      <div>
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <img src={project.link} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
