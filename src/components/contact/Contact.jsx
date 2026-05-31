import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <section id="contact" className="mt-32 fade-up">
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="flex items-center gap-3 mb-8">
          <span className="sect-eyebrow">{"// Contact"}</span>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Get in touch</h2>
        </div>

        <div className="flex justify-center">
          <div
            className="card card-lift"
            style={{
              padding: "28px 40px",
              textAlign: "center",
              cursor: "default",
              maxWidth: 400,
              width: "100%",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-edge)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 16px",
              }}
            >
              <HiOutlineMail style={{ color: "var(--accent)", fontSize: 22 }} />
            </div>
            <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>Email</h4>
            <p className="dim" style={{ fontSize: 14, marginBottom: 16 }}>
              sahspeaks@gmail.com
            </p>
            <a
              href="mailto:sahspeaks@gmail.com"
              className="btn btn-primary"
              style={{ margin: "0 auto" }}
            >
              Send Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
