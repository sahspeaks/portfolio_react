import ME from "../../assets/Me2.png";
import ME2 from "../../assets/me3.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about" className="mt-32 px-4 fade-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="sect-eyebrow">// About</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Get to know me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 lg:gap-[8%]">
          {/* Profile image card */}
          <div className="w-full max-w-sm mx-auto lg:max-w-none">
            <div className="card card-lift overflow-hidden">
              <div className="lg:hidden">
                <img
                  src={ME2}
                  alt="Abhishek Kumar"
                  className="block w-full h-full object-contain"
                />
              </div>
              <div className="hidden lg:block">
                <img
                  src={ME}
                  alt="Abhishek Kumar"
                  className="block w-full h-full object-contain"
                />
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
                <div className="mono" style={{ fontSize: 26, fontWeight: 600 }}>15+</div>
                <div className="dim" style={{ fontSize: 12, marginTop: 2 }}>Built & shipped</div>
              </div>
            </div>

            <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontSize: 14 }}>
              Dedicated Full-Stack Web Developer with a strong academic
              background in Computer Science. Skilled in building responsive web
              applications using cutting-edge technologies like React JS,
              Tailwind CSS, Javascript. I enjoy exploring new technologies. I am
              a quick learner with a fun, outgoing personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
