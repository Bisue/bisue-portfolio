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
    siteUrl,
  } = useSiteMetadata();

  const seoData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
  };

  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      <meta name="og:title" content={seoData.title} />
      <meta name="og:site_name" content={seoData.title} />
      <meta name="og:description" content={seoData.description} />
      <meta name="og:image" content={seoData.image} />
      {children}
    </>
  );
};

export default Seo;
