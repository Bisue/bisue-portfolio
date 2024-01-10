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
      className="flex items-center gap-3 tracking-wider"
      href={link.href}
      target="_blank"
    >
      <img src="/img/external.svg" alt="외부 링크" />
      <div>
        <div className="font-bold" style={{ fontSize: 24 }}>
          {link.title}
        </div>
        <div className="text-white text-opacity-75" style={{ fontSize: 16 }}>
          {link.description}
        </div>
      </div>
    </a>
  );
};

export default ExternalLink;
