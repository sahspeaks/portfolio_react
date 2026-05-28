import React, { useState } from "react";
import WebProject from "./WebProject";
import MobileProject from "./MobileProject";
import { webProjectsData, mobileProjectsData } from "./projectData";

const TABS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
];

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const totalProjects = webProjectsData.length + mobileProjectsData.length;

  const showMobile = activeTab === "all" || activeTab === "mobile";
  const showWeb = activeTab === "all" || activeTab === "web";

  const mobileItems = showMobile ? mobileProjectsData : [];
  const webItems = showWeb ? webProjectsData : [];

  const allItems = [
    ...mobileItems.map((p) => ({ ...p, type: "mobile" })),
    ...webItems.map((p) => ({ ...p, type: "web" })),
  ];

  const INITIAL_COUNT = 6;
  const visibleItems = showAll ? allItems : allItems.slice(0, INITIAL_COUNT);
  const hasMore = allItems.length > INITIAL_COUNT;

  return (
    <section id="portfolio" className="mt-32 fade-up">
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="sect-eyebrow">// Portfolio</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Recent work</h2>
        </div>
        <p className="dim mb-6" style={{ fontSize: 14 }}>
          {totalProjects} projects — mobile apps & web applications
        </p>

        {/* Tabs + Count */}
        <div className="flex items-center gap-3 mb-8">
          <div className="portfolio-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`portfolio-tab ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => { setActiveTab(tab.key); setShowAll(false); }}
              >
                {tab.label}
                <span className="tab-count">
                  {tab.key === "all"
                    ? totalProjects
                    : tab.key === "web"
                    ? webProjectsData.length
                    : mobileProjectsData.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {visibleItems.map((project, i) => (
            <div
              key={project.id}
              className={`portfolio-item ${i < 2 && !showAll && activeTab === "all" ? "featured" : ""}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {project.type === "mobile" ? (
                <MobileProject project={project} featured={i < 2 && !showAll && activeTab === "all"} />
              ) : (
                <WebProject project={project} featured={i < 2 && !showAll && activeTab === "all"} />
              )}
            </div>
          ))}
        </div>

        {/* Show more */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-8">
            <button className="btn btn-lg" onClick={() => setShowAll(true)}>
              View all {allItems.length} projects
              <i className="fas fa-arrow-down" style={{ fontSize: 12, marginLeft: 8 }} />
            </button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="flex justify-center mt-8">
            <button className="btn" onClick={() => setShowAll(false)}>
              Show less
              <i className="fas fa-arrow-up" style={{ fontSize: 12, marginLeft: 8 }} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .portfolio-tabs {
          display: flex;
          gap: 4px;
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          padding: 4px;
        }

        .portfolio-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 7px;
          font-size: 13px;
          font-family: var(--f-body);
          font-weight: 500;
          color: var(--text-dim);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all .15s;
        }

        .portfolio-tab:hover {
          color: var(--text);
          background: var(--surface-2);
        }

        .portfolio-tab.active {
          color: var(--text);
          background: var(--surface-2);
          box-shadow: inset 0 0 0 1px var(--border);
        }

        .tab-count {
          font-family: var(--f-mono);
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 5px;
          background: var(--surface-3);
          color: var(--text-faint);
        }

        .portfolio-tab.active .tab-count {
          background: var(--accent-soft);
          color: var(--accent);
        }

        .portfolio-grid {
          columns: 3;
          column-gap: 16px;
        }

        .portfolio-item {
          break-inside: avoid;
          margin-bottom: 16px;
          animation: portfolioIn .4s ease both;
        }

        @keyframes portfolioIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            columns: 2;
          }
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            columns: 1;
          }
        }

        /* ── Shared card styles ── */
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 12px;
          overflow: hidden;
          transition: all .25s;
          cursor: default;
        }
        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,.35);
        }

        .project-info {
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-title {
          font-family: var(--f-sans);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .project-links {
          display: flex;
          gap: 4px;
        }

        .project-link {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--surface-2);
          border: 1px solid var(--border-soft);
          display: grid;
          place-items: center;
          color: var(--text-dim);
          font-size: 13px;
          transition: all .15s;
          text-decoration: none;
        }

        .project-link:hover {
          background: var(--surface-3);
          color: var(--text);
          border-color: var(--border-strong);
        }

        .project-link.accent:hover {
          color: var(--accent);
          border-color: var(--accent-edge);
          background: var(--accent-soft);
        }

        .project-type-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 8px;
          border-radius: 6px;
          font-family: var(--f-mono);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .06em;
          background: rgba(10,11,15,.72);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-soft);
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 4px;
          z-index: 2;
        }

        /* ── Web project ── */
        .web-img-area {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/10;
          background: var(--surface-2);
        }

        .web-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .project-card:hover .web-img {
          transform: scale(1.06);
        }

        .web-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(10,11,15,.92) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          transition: opacity .25s;
          z-index: 1;
        }

        .project-card:hover .web-overlay {
          opacity: 1;
        }

        .web-overlay-actions {
          display: flex;
          gap: 8px;
        }

        .web-overlay-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          font-family: var(--f-body);
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text);
          transition: all .15s;
          text-decoration: none;
        }

        .web-overlay-btn:hover {
          background: var(--surface-3);
          border-color: var(--border-strong);
        }

        .web-overlay-btn.primary {
          background: linear-gradient(180deg, #ff7a4d, #ff5a26);
          border: none;
          color: #1a0a04;
          box-shadow: 0 2px 10px rgba(255,107,61,.3);
        }

        .web-overlay-btn.primary:hover {
          box-shadow: 0 4px 16px rgba(255,107,61,.45);
        }

        .web-status-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 8px;
          border-radius: 6px;
          font-family: var(--f-mono);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .06em;
          background: rgba(239,68,68,.15);
          border: 1px solid rgba(239,68,68,.25);
          color: #ef4444;
          z-index: 2;
        }

        /* ── Mobile project ── */
        .mob-img-area {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%);
          padding: 28px 0;
        }

        .phone-frame {
          width: 55%;
          aspect-ratio: 9/19.5;
          background: var(--surface-3);
          border-radius: 14px;
          border: 2px solid var(--border);
          padding: 3px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0,0,0,.3);
          transition: transform .3s;
          z-index: 1;
        }

        .project-card:hover .phone-frame {
          transform: scale(1.03) translateY(-3px);
        }

        .phone-notch {
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 4px;
          border-radius: 3px;
          background: var(--border);
          z-index: 3;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 11px;
          overflow: hidden;
        }

        .phone-screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .mob-badge {
          background: rgba(10,11,15,.72);
          border-color: rgba(106,166,255,.2);
          color: var(--info);
        }

        .mob-tech {
          font-family: var(--f-mono);
          font-size: 10px;
          color: var(--text-faint);
          letter-spacing: .04em;
          margin-top: 2px;
          display: block;
        }
      `}</style>
    </section>
  );
};
