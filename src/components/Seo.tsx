import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface SeoProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({ title, description, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    url,
  } = useSiteMetadata();

  const seoData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image}`,
  };

  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      <meta name="og:image" content={seoData.image} />
      {children}
    </>
  );
};

export default Seo;
