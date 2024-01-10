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
      className="flex items-center gap-3 tracking-wider"
      to={link.target}
    >
      <img src="/img/internal.svg" alt="내부 링크" />
      <div>
        <div className="font-bold" style={{ fontSize: 24 }}>
          {link.title}
        </div>
        <div className="text-white text-opacity-75" style={{ fontSize: 16 }}>
          {link.description}
        </div>
      </div>
    </AnchorLink>
  );
};

export default InternalLink;
