import { useState } from 'react';
import './Projects.scss';

import Title from '../../components/Title';
import Project from '../../components/Project';
import MultiSelect from '../../components/MultiSelect';
import projects from '../../data/projects';
import michelle from '../../media/michelle1.jpeg';

const yearOptions = [...new Set(projects.map((p) => p.year))]
  .sort((a, b) => b - a)
  .map((year) => ({ label: String(year), value: year }));

const typeOptions = ['professional', 'coding', 'design', 'video', 'writing'].map(
  (type) => ({ label: type, value: type })
);

function matchesSearch(project, search) {
  const haystack = [project.title, project.description, ...(project.tags || [])]
    .join(' ')
    .toLowerCase();
  return haystack.includes(search.trim().toLowerCase());
}

export default function Projects() {
  const [yearSelected, setYearSelected] = useState([]);
  const [typeSelected, setTypeSelected] = useState([]);
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(
    (project) =>
      (yearSelected.length === 0 || yearSelected.includes(project.year)) &&
      (typeSelected.length === 0 || project.type.some((t) => typeSelected.includes(t))) &&
      (!search.trim() || matchesSearch(project, search))
  );

  return (
    <div className="projects-page page">
      <Title title="Projects" />
      <div className="info-section">
        <div style={{ backgroundImage: `url("${michelle}")` }} className="info-photo" />
        <div className="info-description">
          Michelle Pine is a Frontend Technical Lead and designer specializing in
          design systems, accessible user interfaces, and scalable React and
          TypeScript applications.
        </div>
      </div>
      <div className="projects-filter">
        <form className="searchbox" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search-box" className="sr-only">
            Search projects
          </label>
          <input
            id="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="searchbox"
            type="text"
            placeholder="Search..."
          />
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </form>
        <div className="year-filter">
          <MultiSelect
            label="Filter by year"
            placeholder="Year..."
            allSelectedLabel="All Years"
            options={yearOptions}
            selected={yearSelected}
            onChange={setYearSelected}
          />
        </div>
        <div className="type-filter">
          <MultiSelect
            label="Filter by project type"
            placeholder="Project Type..."
            allSelectedLabel="All Project Types"
            options={typeOptions}
            selected={typeSelected}
            onChange={setTypeSelected}
          />
        </div>
      </div>
      <p className="sr-only" role="status">
        {filteredProjects.length === projects.length
          ? `Showing all ${projects.length} projects`
          : `Showing ${filteredProjects.length} of ${projects.length} projects`}
      </p>
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <Project
            key={project.url}
            project={project}
            single={filteredProjects.length === 1}
          />
        ))}
        {filteredProjects.length === 0 && (
          <p className="projects-empty">No projects match those filters.</p>
        )}
      </div>
    </div>
  );
}
