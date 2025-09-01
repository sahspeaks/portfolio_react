import React from "react";
import ContributedProject from "./ContributedProject";
import { contributedProjectsData } from "./projectData";

export const ContributedWebsites = () => {
  return (
    <section id="contributed" className="mt-32">
      <h5 className="text-center text-gray-400 mb-4">
        My Professional Contributions
      </h5>
      <h2 className="text-center text-[#90be6d] text-4xl mb-12 font-medium">
        Collaborative Projects
      </h2>

      {/* Caution Banner */}
      <div className="bg-gray-800 border-l-4 border-green-400 p-6 my-8 rounded-lg max-w-4xl mx-auto w-[calc(100%-3rem)] lg:w-[calc(100%-2.5rem)] lg:my-7 lg:p-5 md:w-[calc(100%-2rem)] md:my-6 md:p-4 md:border-l-2 sm:w-[calc(100%-1.5rem)] sm:my-5 sm:p-3 sm:rounded-md">
        <div className="flex items-start gap-3">
          <i className="fas fa-triangle-exclamation text-[#90be6d] mt-1"></i>
          <div>
            <span className="block mb-3 lg:text-base md:text-sm sm:text-sm">
              Note: These are live production websites. Please refrain from:
            </span>
            <ul className="list-disc ml-6 space-y-1 text-sm lg:text-sm md:text-xs sm:text-xs sm:ml-4">
              <li>Placing test/fake orders</li>
              <li>Submitting dummy personal information</li>
              <li>Attempting payment transactions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 md:gap-6 sm:gap-4">
          {contributedProjectsData.map((project) => (
            <ContributedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
