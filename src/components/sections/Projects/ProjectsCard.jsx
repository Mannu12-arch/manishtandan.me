import "./ProjectsCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <div className="project-image">

        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            Project Image
          </div>
        )}

      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">

          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}

        </div>

        <div className="project-buttons">

          <a href={project.live}>Live Demo</a>

          <a href={project.github}>GitHub</a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;