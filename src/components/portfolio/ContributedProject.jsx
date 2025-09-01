import React from "react";

const ContributedProject = ({ project }) => {
  return (
    <article className="bg-gray-800 p-4 rounded-3xl border border-transparent transition-all duration-300 hover:border-green-300 hover:bg-transparent">
      <div className="rounded-2xl overflow-hidden h-72 flex items-center justify-center bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-4 text-lg font-medium">{project.title}</h3>

      <div className="my-4 text-gray-400">
        <p className="text-sm mb-1">{project.description}</p>
        <small className="text-xs text-[#90be6d] block font-medium">
          Contribution: {project.contribution}
        </small>
      </div>

      <div className="flex gap-4 mb-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="w-max inline-block text-[#90be6d] py-3 px-5 rounded-lg cursor-pointer border border-[#90be6d] transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        <a
          href={project.liveUrl}
          className="w-max inline-block bg-[#90be6d] text-gray-900 py-3 px-5 rounded-lg cursor-pointer border border-green-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>

      {project.isProduction && (
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
          <i className="fas fa-circle-info text-[#90be6d]"></i>
          Active production site - Real transactions enabled
        </div>
      )}
    </article>
  );
};

export default ContributedProject;
