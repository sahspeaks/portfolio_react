import ME from "../../assets/Me2.png";
import ME2 from "../../assets/me3.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about" className="mt-32 px-4 fade-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="sect-eyebrow">{"// About"}</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Get to know me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 lg:gap-[8%]">
          {/* Profile image — floating style */}
          <div className="w-full max-w-sm mx-auto lg:max-w-none flex justify-center">
            <div className="about-img-wrap">
              {/* Glow behind image */}
              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "60%",
                  top: "10%",
                  left: "10%",
                  background: "radial-gradient(closest-side, rgba(255,107,61,.18), transparent)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div className="lg:hidden" style={{ position: "relative", zIndex: 1 }}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src={ME2}
                  alt="Abhishek Kumar"
                  className="about-hero-img"
                />
                <div className="about-img-fade" />
              </div>
              <div className="hidden lg:block" style={{ position: "relative", zIndex: 1 }}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src={ME}
                  alt="Abhishek Kumar"
                  className="about-hero-img"
                />
                <div className="about-img-fade" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="card card-pad card-lift" style={{ cursor: "default" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "var(--accent-soft)",
                      border: "1px solid var(--accent-edge)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <FaAward style={{ color: "var(--accent)", fontSize: 14 }} />
                  </div>
                  <span className="mono faint" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase" }}>
                    Experience
                  </span>
                </div>
                <div className="mono" style={{ fontSize: 26, fontWeight: 600 }}>1+</div>
                <div className="dim" style={{ fontSize: 12, marginTop: 2 }}>Years in industry</div>
              </div>

              <div className="card card-pad card-lift" style={{ cursor: "default" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(106,166,255,.14)",
                      border: "1px solid rgba(106,166,255,.22)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <VscFolderLibrary style={{ color: "var(--info)", fontSize: 14 }} />
                  </div>
                  <span className="mono faint" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase" }}>
                    Projects
                  </span>
                </div>
                <div className="mono" style={{ fontSize: 26, fontWeight: 600 }}>20+</div>
                <div className="dim" style={{ fontSize: 12, marginTop: 2 }}>Built & shipped</div>
              </div>
            </div>

            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontSize: 14 }}>
              Results-driven Software Developer at Tata Consultancy Services (TCS) with
              hands-on experience designing and delivering enterprise-grade middleware
              integration platforms, distributed microservices architectures, and
              full-stack web applications. Proficient in Java, Spring Boot, Apache Camel,
              and the MERN stack. Experienced in building secure RESTful APIs,
              asynchronous event-driven systems using Apache Kafka, and Generative
              AI-powered solutions.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-img-wrap {
          position: relative;
          width: 85%;
          max-width: 300px;
        }

        .about-hero-img {
          width: 100%;
          display: block;
          border-radius: 20px;
          object-fit: cover;
        }

        .about-img-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, var(--bg) 0%, transparent 100%);
          border-radius: 0 0 20px 20px;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};
