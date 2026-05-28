import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  const navLinks = [
    { href: "#header", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#service", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/sahspeaks/", icon: <BsLinkedin size={14} /> },
    { href: "https://github.com/sahspeaks", icon: <BsGithub size={14} /> },
    { href: "https://twitter.com/Sah_speaks", icon: <AiFillTwitterCircle size={14} /> },
    { href: "https://www.instagram.com/sah_speaks/", icon: <BsInstagram size={14} /> },
  ];

  return (
    <footer
      id="footer"
      className="mt-32"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border-soft)",
        padding: "48px 0 32px",
      }}
    >
      <div className="container mx-auto text-center">
        {/* Brand */}
        <a
          href="#header"
          style={{
            fontFamily: "var(--f-sans)",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "inline-block",
            marginBottom: 24,
          }}
        >
          <span className="gradient-text">ABHISHEK</span>
        </a>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-1 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-ghost"
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-dim)",
                transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-2 mb-8">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "var(--surface-2)",
                border: "1px solid var(--border-soft)",
                display: "grid",
                placeItems: "center",
                color: "var(--text-dim)",
                transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--surface-3)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--surface-2)";
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.borderColor = "var(--border-soft)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border-soft)", marginBottom: 20 }} />

        {/* Copyright */}
        <p className="faint mono" style={{ fontSize: 11 }}>
          &copy; {new Date().getFullYear()} ABHISHEK KUMAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
