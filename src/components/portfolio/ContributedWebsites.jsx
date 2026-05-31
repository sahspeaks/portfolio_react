import React from "react";
import ContributedProject from "./ContributedProject";
import { contributedProjectsData } from "./projectData";

export const ContributedWebsites = () => {
  return (
    <section id="contributed" className="mt-32 fade-up">
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="flex items-center gap-3 mb-8">
          <span className="sect-eyebrow">{"// Contributions"}</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Collaborative Projects</h2>
        </div>

        {/* Caution Banner */}
        <div
          className="card mb-6 flex items-start gap-3"
          style={{
            padding: "14px 18px",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <i className="fas fa-triangle-exclamation" style={{ color: "var(--accent)", marginTop: 2 }} />
          <div>
            <span className="block mb-2" style={{ fontSize: 13.5, fontWeight: 500 }}>
              Note: These are live production websites. Please refrain from:
            </span>
            <ul className="dim" style={{ paddingLeft: 20, listStyle: "disc", fontSize: 12.5 }}>
              <li>Placing test/fake orders</li>
              <li>Submitting dummy personal information</li>
              <li>Attempting payment transactions</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {contributedProjectsData.map((project) => (
            <ContributedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
