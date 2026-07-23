import { useState } from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import projectsData from "./projectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 3 projects initially
  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="heading-line"></div>
        </div>

        {/* Top Button */}
        <div className="projects-top">
          <button
            className="view-projects-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All Projects →"}
          </button>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectsCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;