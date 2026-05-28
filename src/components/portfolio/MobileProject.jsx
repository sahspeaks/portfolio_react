import React from "react";

const MobileProject = ({ project, featured }) => {
  return (
    <article className="project-card mobile-project-card">
      {/* Image area */}
      <div className="mob-img-area">
        {/* Phone frame */}
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            <img
              src={project.image}
              alt={project.title}
              className="phone-screen-img"
            />
          </div>
        </div>

        {/* Type badge */}
        <span className="project-type-badge mob-badge">
          <i className="fas fa-mobile-screen" style={{ fontSize: 9 }} /> MOBILE
        </span>
      </div>

      {/* Info */}
      <div className="project-info">
        <div>
          <h3 className="project-title">{project.title}</h3>
          {project.technologies && (
            <span className="mob-tech">{project.technologies}</span>
          )}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default MobileProject;
