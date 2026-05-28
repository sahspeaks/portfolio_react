import React from "react";

const ContributedProject = ({ project }) => {
  return (
    <article className="card card-pad card-lift" style={{ cursor: "default" }}>
      <div
        className="overflow-hidden flex items-center justify-center"
        style={{ borderRadius: 10, height: 280, background: "var(--surface-2)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 mb-3">
        <h3 style={{ fontSize: 17, fontWeight: 600 }}>{project.title}</h3>
      </div>

      <div className="mb-3">
        <p className="dim" style={{ fontSize: 13, marginBottom: 4 }}>{project.description}</p>
        <span className="badge badge-accent" style={{ fontSize: 10.5 }}>
          {project.contribution}
        </span>
      </div>

      <div className="flex gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="btn"
            style={{ fontSize: 12.5, padding: "5px 10px", borderRadius: 7 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        <a
          href={project.liveUrl}
          className="btn btn-primary"
          style={{ fontSize: 12.5, padding: "5px 10px", borderRadius: 7 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>

      {project.isProduction && (
        <div className="flex items-center gap-2 mt-3 faint mono" style={{ fontSize: 11 }}>
          <i className="fas fa-circle-info" style={{ color: "var(--accent)" }} />
          Active production site
        </div>
      )}
    </article>
  );
};

export default ContributedProject;
