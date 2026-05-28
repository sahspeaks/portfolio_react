import React from "react";

const frontendSkills = [
  { name: "HTML", level: "Experienced", pct: 95, icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS", level: "Experienced", pct: 92, icon: "fa-brands fa-css3-alt", color: "#2965f1" },
  { name: "JavaScript", level: "Experienced", pct: 90, icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "Bootstrap", level: "Experienced", pct: 85, icon: "fa-brands fa-bootstrap", color: "#7952b3" },
  { name: "Tailwind CSS", level: "Experienced", pct: 88, icon: "fa-solid fa-wind", color: "#38bdf8" },
  { name: "React", level: "Experienced", pct: 90, icon: "fa-brands fa-react", color: "#61dafb" },
];

const backendSkills = [
  { name: "Spring Boot", level: "Experienced", pct: 88, icon: "fa-solid fa-leaf", color: "#6db33f" },
  { name: "Node JS", level: "Experienced", pct: 87, icon: "fa-brands fa-node-js", color: "#68a063" },
  { name: "MongoDB", level: "Experienced", pct: 85, icon: "fa-solid fa-database", color: "#4db33d" },
  { name: "MySQL", level: "Experienced", pct: 84, icon: "fa-solid fa-database", color: "#00758f" },
  { name: "Python", level: "Intermediate", pct: 70, icon: "fa-brands fa-python", color: "#ffb547" },
  { name: "Express JS", level: "Experienced", pct: 86, icon: "fa-brands fa-node", color: "#68a063" },
];

const SkillCard = ({ skill, index }) => {
  const isExperienced = skill.level === "Experienced";
  const barColor = isExperienced ? "#22d3a8" : "#ffb547";
  const barGlow = isExperienced ? "rgba(34,211,168,.5)" : "rgba(255,181,71,.5)";

  return (
    <div
      className="skill-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="skill-card-inner">
        {/* Icon + Name */}
        <div className="flex items-center gap-3">
          <div
            className="skill-icon"
            style={{
              background: `${skill.color}18`,
              border: `1px solid ${skill.color}30`,
              color: skill.color,
            }}
          >
            <i className={skill.icon} style={{ fontSize: 16 }} />
          </div>
          <div>
            <span className="skill-name">{skill.name}</span>
            <span
              className="skill-level"
              style={{ color: isExperienced ? "var(--easy)" : "var(--accent-2)" }}
            >
              {skill.level}
            </span>
          </div>
        </div>

        {/* Percentage */}
        <span className="skill-pct" style={{ color: barColor }}>{skill.pct}%</span>
      </div>

      {/* Progress bar */}
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${skill.pct}%`,
            background: `linear-gradient(90deg, ${barColor}cc, ${barColor})`,
            boxShadow: `0 0 10px ${barGlow}, 0 0 4px ${barGlow}`,
          }}
        />
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="mt-32 fade-up">
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="flex items-center gap-3 mb-2">
          <span className="sect-eyebrow">// Skills</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>My Experience</h2>
        </div>
        <p className="dim mb-8" style={{ fontSize: 14, maxWidth: 500 }}>
          Technologies I work with daily to build modern, scalable applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Frontend */}
          <div className="skill-pane">
            <div className="skill-pane-header">
              <div className="flex items-center gap-2.5">
                <div className="pane-icon" style={{ background: "rgba(255,107,61,.14)", borderColor: "rgba(255,107,61,.25)" }}>
                  <i className="fas fa-code" style={{ color: "var(--accent)", fontSize: 12 }} />
                </div>
                <div>
                  <span className="pane-title">Frontend</span>
                  <span className="pane-subtitle">UI & Client-Side</span>
                </div>
              </div>
              <span className="pane-count">{frontendSkills.length}</span>
            </div>
            <div className="skill-list">
              {frontendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-pane">
            <div className="skill-pane-header">
              <div className="flex items-center gap-2.5">
                <div className="pane-icon" style={{ background: "rgba(106,166,255,.14)", borderColor: "rgba(106,166,255,.25)" }}>
                  <i className="fas fa-server" style={{ color: "var(--info)", fontSize: 12 }} />
                </div>
                <div>
                  <span className="pane-title">Backend</span>
                  <span className="pane-subtitle">Server & Database</span>
                </div>
              </div>
              <span className="pane-count">{backendSkills.length}</span>
            </div>
            <div className="skill-list">
              {backendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-pane {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .2s, box-shadow .2s;
        }
        .skill-pane:hover {
          border-color: var(--border-strong);
          box-shadow: 0 8px 32px rgba(0,0,0,.3);
        }

        .skill-pane-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: var(--surface-2);
          border-bottom: 1px solid var(--border-soft);
        }

        .pane-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid;
          display: grid;
          place-items: center;
        }

        .pane-title {
          display: block;
          font-family: var(--f-sans);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .pane-subtitle {
          display: block;
          font-family: var(--f-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--text-faint);
          margin-top: 1px;
        }

        .pane-count {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: var(--surface-3);
          border: 1px solid var(--border-soft);
          display: grid;
          place-items: center;
          font-family: var(--f-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dim);
        }

        .skill-list {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-card {
          padding: 12px 14px 10px;
          border-radius: 10px;
          background: var(--bg);
          border: 1px solid transparent;
          cursor: default;
          transition: all .2s;
          animation: skillSlideIn .4s ease both;
        }
        .skill-card:hover {
          background: var(--surface-2);
          border-color: var(--border-soft);
          transform: translateX(4px);
        }

        @keyframes skillSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .skill-card-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: transform .2s;
        }
        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }

        .skill-name {
          display: block;
          font-weight: 500;
          font-size: 13.5px;
          color: var(--text);
          line-height: 1.2;
        }

        .skill-level {
          display: block;
          font-family: var(--f-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .06em;
          margin-top: 1px;
        }

        .skill-pct {
          font-family: var(--f-mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .skill-bar-track {
          height: 4px;
          background: rgba(255,255,255,.06);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width .8s cubic-bezier(.4, 0, .2, 1);
          position: relative;
        }
      `}</style>
    </section>
  );
};
