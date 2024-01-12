import React from "react";

interface ExternalLinkProps {
  link: {
    title: string;
    description: string;
    href: string;
  };
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ link }) => {
  return (
    <a
      className="flex items-center gap-3 tracking-wider group"
      href={link.href}
      target="_blank"
    >
      <img
        className="opacity-75 transition group-hover:translate-x-1 group-hover:opacity-100"
        src="/img/external.svg"
        alt="외부 링크"
      />
      <div>
        <div
          className="font-bold text-white/85 transition group-hover:text-white/100"
          style={{ fontSize: 24 }}
        >
          {link.title}
        </div>
        <div
          className="text-white/50 transition group-hover:text-white-75"
          style={{ fontSize: 16 }}
        >
          {link.description}
        </div>
      </div>
    </a>
  );
};

export default ExternalLink;
