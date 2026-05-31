import React from "react";
import { BiCheck } from "react-icons/bi";

const services = [
  {
    title: "Full-Stack Development",
    color: "var(--accent)",
    items: [
      { bold: "Modern Web Apps", text: "Building scalable applications with React, Node.js, and the MERN stack." },
      { bold: "RESTful & Reactive APIs", text: "Designing secure APIs with Spring Boot, WebFlux, and JWT authentication." },
      { bold: "Responsive UI", text: "Crafting pixel-perfect interfaces using Tailwind CSS and modern frameworks." },
    ],
  },
  {
    title: "Middleware & Integration",
    color: "var(--info)",
    items: [
      { bold: "Enterprise Integration", text: "Building middleware platforms with Apache Camel and EIP patterns." },
      { bold: "Event-Driven Systems", text: "Designing asynchronous architectures with Apache Kafka and message queues." },
      { bold: "Microservices", text: "Architecting distributed systems with Spring Cloud and service orchestration." },
    ],
  },
  {
    title: "DevOps & AI Solutions",
    color: "var(--easy)",
    items: [
      { bold: "Containerization", text: "Deploying with Docker and orchestrating with Kubernetes for scalability." },
      { bold: "CI/CD Pipelines", text: "Automating builds and deployments with Maven and cloud-native tools." },
      { bold: "Gen AI Integration", text: "Building RAG-powered solutions with OpenAI APIs and intelligent assistants." },
    ],
  },
];

export const Service = () => {
  return (
    <section id="service" className="mt-32 fade-up">
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="flex items-center gap-3 mb-8">
          <span className="sect-eyebrow">{"// Services"}</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>My Expertise</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.title} className="card card-lift" style={{ cursor: "default", overflow: "visible" }}>
              {/* Header bar */}
              <div
                className="flex items-center gap-2 px-5 py-4"
                style={{
                  background: "var(--surface-2)",
                  borderBottom: "1px solid var(--border-soft)",
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 7,
                    background: service.color === "var(--accent)"
                      ? "linear-gradient(135deg, var(--accent), #ff9866)"
                      : service.color === "var(--info)"
                      ? "linear-gradient(135deg, var(--info), #8bbdff)"
                      : "linear-gradient(135deg, var(--easy), #6ee7b7)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1a0f0a",
                    boxShadow: service.color === "var(--accent)"
                      ? "0 0 0 1px rgba(255,107,61,.3), 0 4px 12px rgba(255,107,61,.25)"
                      : service.color === "var(--info)"
                      ? "0 0 0 1px rgba(106,166,255,.3), 0 4px 12px rgba(106,166,255,.25)"
                      : "0 0 0 1px rgba(34,211,168,.3), 0 4px 12px rgba(34,211,168,.25)",
                  }}
                >
                  {service.title.charAt(0)}
                </span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{service.title}</span>
              </div>

              {/* Items */}
              <ul className="p-5 flex flex-col gap-3">
                {service.items.map((item) => (
                  <li key={item.bold} className="flex gap-3 items-start">
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "var(--accent-soft)",
                        border: "1px solid var(--accent-edge)",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <BiCheck style={{ color: "var(--accent)", fontSize: 14 }} />
                    </span>
                    <p style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.5 }}>
                      <strong style={{ color: "var(--text)", fontWeight: 600 }}>{item.bold}:</strong>{" "}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
