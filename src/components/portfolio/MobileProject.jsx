//MobileProject.jsx - Reusable Mobile Project Component
import React from "react";

const MobileProject = ({ project }) => {
  return (
    <article className="bg-gray-800 p-4 rounded-3xl border border-transparent transition-all duration-300 hover:border-green-300 hover:bg-transparent">
      <div className="relative rounded-2xl overflow-hidden h-72 flex items-center justify-center bg-gray-700">
        {/* Mobile Frame */}
        <div className="h-full aspect-[9/19] bg-gray-700 rounded-2xl p-1 flex items-center justify-center shadow-lg">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <h3 className="mt-2 mb-2 text-lg font-medium">{project.title}</h3>

      {project.technologies && (
        <p className="text-gray-400 text-sm mb-4 text-center">
          {project.technologies}
        </p>
      )}

      <div className="flex gap-4 mb-2 justify-center">
        <a
          href={project.github}
          className="w-max inline-block text-[#90be6d] py-3 px-5 rounded-lg cursor-pointer border border-green-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </article>
  );
};

export default MobileProject;
