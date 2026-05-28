import React from "react";

const WebProject = ({ project, featured }) => {
  return (
    <article className="project-card web-project-card">
      {/* Image */}
      <div className="web-img-area">
        <img
          src={project.image}
          alt={project.title}
          className="web-img"
        />
        {/* Hover overlay */}
        <div className="web-overlay">
          <div className="web-overlay-actions">
            <a
              href={project.github}
              className="web-overlay-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" style={{ fontSize: 14 }} />
              <span>Code</span>
            </a>
            {!project.disabled && project.liveDemo && (
              <a
                href={project.liveDemo}
                className="web-overlay-btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt" style={{ fontSize: 12 }} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        {/* Type badge */}
        <span className="project-type-badge">
          <i className="fas fa-globe" style={{ fontSize: 9 }} /> WEB
        </span>

        {project.disabled && (
          <span className="web-status-badge">Offline</span>
        )}
      </div>

      {/* Info */}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          <a
            href={project.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          {!project.disabled && project.liveDemo && (
            <a
              href={project.liveDemo}
              className="project-link accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-arrow-up-right-from-square" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default WebProject;
