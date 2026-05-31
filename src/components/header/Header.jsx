import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/Me2.png";
import ME2 from "../../assets/me3.png";
import { HeaderSocial } from "./HeaderSocial";

export const Header = () => {
  const stats = [
    { k: "Experience", v: "1+", sub: "Years in industry" },
    { k: "Projects", v: "20+", sub: "Built & shipped" },
    { k: "Stack", v: "Full", sub: "Frontend · Backend" },
    { k: "Location", v: "India", sub: "Open to remote" },
  ];

  return (
    <header
      id="header"
      className="relative overflow-hidden"
      style={{ padding: "80px 0 64px" }}
    >
      {/* Grid background */}
      <div className="hero-grid" />
      {/* Glowing blobs */}
      <div className="hero-blob" style={{ left: "-100px", top: "-60px" }} />
      <div
        className="hero-blob"
        style={{
          right: "-120px",
          bottom: "-160px",
          background:
            "radial-gradient(closest-side, rgba(176,124,255,.22), transparent)",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden text-center fade-up">
          <div className="sect-eyebrow mb-4">{"// Hello, I'm"}</div>
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-2"
            style={{ letterSpacing: "-0.035em" }}
          >
            <span className="gradient-text">Abhishek Kumar</span>
          </h1>
          <p
            className="dim text-base mb-8"
            style={{ fontFamily: "var(--f-body)" }}
          >
            Full-Stack Developer · Building for the web
          </p>
          <CTA />

          <div className="mt-12 mx-auto" style={{ maxWidth: 280 }}>
            <div
              className="card"
              style={{ boxShadow: "0 24px 60px -20px rgba(255,107,61,.25)" }}
            >
              <div className="overflow-hidden rounded-t-[14px]">
                <img
                  src={ME}
                  alt="Abhishek Kumar"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  background: "var(--surface-2)",
                  borderTop: "1px solid var(--border-soft)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--easy)",
                    boxShadow: "0 0 8px var(--easy)",
                  }}
                />
                <span
                  className="mono dim"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className="hidden lg:grid items-center fade-up"
          style={{ gridTemplateColumns: "1.15fr .85fr", gap: 40 }}
        >
          {/* Left - Text */}
          <div className="flex flex-col gap-5">
            <div
              className="flex items-center gap-2 self-start"
              style={{
                padding: "5px 5px 5px 14px",
                background: "var(--surface)",
                border: "1px solid var(--border-soft)",
                borderRadius: 999,
                fontSize: 12.5,
              }}
            >
              <span className="dim">Software Developer at TCS</span>
              <span className="divider" style={{ height: 14 }} />
              <span style={{ color: "var(--text)" }}>
                Open to opportunities
              </span>
              <span className="badge-accent badge" style={{ marginLeft: 4 }}>
                Hire me
              </span>
            </div>

            <h1
              style={{
                fontSize: 64,
                lineHeight: 1.02,
                fontWeight: 600,
                letterSpacing: "-0.035em",
              }}
            >
              Building for the
              <br />
              <span className="gradient-text">modern web.</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--text-dim)",
                maxWidth: 540,
                margin: 0,
              }}
            >
              Software Developer at TCS building enterprise middleware integrations,
              distributed microservices, and full-stack web applications with
              Java, Spring Boot, and the MERN stack.
            </p>

            <div className="mt-1">
              <CTA />
            </div>

            <div
              className="flex items-center gap-6 mt-3"
              style={{ color: "var(--text-faint)", fontSize: 12.5 }}
            >
              <span className="flex items-center gap-1.5">
                <span style={{ color: "var(--easy)" }}>●</span> Java & Spring Boot
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: "var(--accent)" }}>●</span> Apache Camel & Kafka
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: "var(--info)" }}>●</span> MERN Stack
              </span>
            </div>
          </div>

          {/* Right - Profile */}
          <div className="flex gap-4 flex-col items-center relative">
            {/* Glow behind image */}
            <div
              style={{
                position: "absolute",
                width: "70%",
                height: "60%",
                top: "10%",
                left: "15%",
                background:
                  "radial-gradient(closest-side, rgba(255,107,61,.18), transparent)",
                filter: "blur(40px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Image */}
            <div className="profile-img-wrap">
              <img
                src={ME2}
                alt="Abhishek Kumar"
                className="profile-hero-img"
              />
              <div className="profile-img-fade" />
            </div>

            {/* Status bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 mt-[-8px] relative z-10"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-soft)",
                borderRadius: 10,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "var(--easy)",
                  boxShadow: "0 0 8px var(--easy)",
                  animation: "pulse 1.4s infinite",
                }}
              />
              <span
                className="mono dim"
                style={{
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                Available for hire
              </span>
              <span className="divider" style={{ height: 14 }} />
              <HeaderSocial />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--border-soft)",
            border: "1px solid var(--border-soft)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{ background: "var(--surface)", padding: "22px 24px" }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--text-faint)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                {s.k}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  marginTop: 6,
                  letterSpacing: "-.02em",
                }}
              >
                {s.v}
              </div>
              <div className="dim" style={{ fontSize: 12, marginTop: 2 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .35; transform: scale(.85); }
        }

        .profile-img-wrap {
          position: relative;
          z-index: 1;
          width: 85%;
          max-width: 340px;
        }

        .profile-hero-img {
          width: 100%;
          display: block;
          border-radius: 20px;
          object-fit: cover;
        }

        .profile-img-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, var(--bg) 0%, transparent 100%);
          border-radius: 0 0 20px 20px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </header>
  );
};
