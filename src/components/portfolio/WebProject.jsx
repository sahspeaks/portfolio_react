// WebProject.jsx - Reusable Web Project Component
import React from "react";

const WebProject = ({ project }) => {
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

      <div className="flex gap-4 mb-2">
        <a
          href={project.github}
          className="w-max inline-block text-[#90be6d] py-3 px-5 rounded-lg cursor-pointer border border-green-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href={project.liveDemo}
          className={`w-max inline-block py-3 px-5 rounded-lg cursor-pointer border transition-all duration-300 ${
            project.disabled
              ? "pointer-events-none text-gray-600 border-gray-600 line-through"
              : "bg-[#90be6d] text-gray-900 border-green-400 hover:bg-white hover:text-gray-900 hover:border-transparent"
          }`}
          target="_blank"
          rel="noopener noreferrer"
          {...(project.disabled && { "aria-disabled": "true" })}
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default WebProject;
