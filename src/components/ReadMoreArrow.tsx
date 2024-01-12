import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ReadMoreArrow = () => {
  return (
    <AnchorLink to="#introduction" className="relative animate-bounce">
      <img
        className="transition translate-y-2 opacity-100"
        src="/img/internal.svg"
        alt="내부 링크"
      />
      <img
        className="absolute top-0 left-0 transition -translate-y-2 opacity-25"
        src="/img/internal.svg"
        alt="내부 링크"
      />
    </AnchorLink>
  );
};

export default ReadMoreArrow;
