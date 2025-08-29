import React from "react";
import WebProject from "./WebProject";
import MobileProject from "./MobileProject";
import { webProjectsData, mobileProjectsData } from "./projectData";

export const Portfolio = () => {
    return (
        <section id="portfolio" className="mt-32">
            <h5 className="text-center text-gray-400 mb-4">My Recent Work</h5>
            <h2 className="text-center text-green-400 text-4xl mb-12 font-medium">Portfolio</h2>

            <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 md:gap-5 sm:gap-4">
                    {/* Mobile Applications */}
                    {mobileProjectsData.map((project) => (
                        <MobileProject key={project.id} project={project} />
                    ))}

                    {/* Web Applications */}
                    {webProjectsData.map((project) => (
                        <WebProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};