import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export const HeaderSocial = () => {
  const links = [
    { href: "https://www.linkedin.com/in/sahspeaks/", icon: <AiFillLinkedin size={16} /> },
    { href: "https://github.com/sahspeaks", icon: <AiFillGithub size={16} /> },
    { href: "https://twitter.com/Sah_speaks", icon: <AiFillTwitterCircle size={16} /> },
    { href: "https://www.instagram.com/sah_speaks/", icon: <AiFillInstagram size={16} /> },
  ];

  return (
    <div className="flex items-center gap-1">
      {links.map((l, i) => (
        <a
          key={i}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: 6,
            borderRadius: 6,
            color: "var(--text-dim)",
            transition: "all .15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.background = "var(--surface-3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-dim)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
};
