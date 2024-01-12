import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

interface InternalLinkProps {
  link: {
    title: string;
    description: string;
    target: string;
  };
}

const InternalLink: React.FC<InternalLinkProps> = ({ link }) => {
  return (
    <AnchorLink
      className="flex items-center gap-3 tracking-wider group"
      to={link.target}
    >
      <div className="relative">
        <img
          className="transition opacity-75 group-hover:translate-y-2 group-hover:opacity-100"
          src="/img/internal.svg"
          alt="내부 링크"
        />
        <img
          className="absolute top-0 left-0 opacity-0 transition group-hover:-translate-y-2 group-hover:opacity-25"
          src="/img/internal.svg"
          alt="내부 링크"
        />
      </div>
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
    </AnchorLink>
  );
};

export default InternalLink;
