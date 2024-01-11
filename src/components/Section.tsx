import React from "react";

interface SectionProps {
  backgroundClassName: string;
  title: string;
  description: string;
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  backgroundClassName,
  title,
  description,
  id,
  children,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col items-center text-white ${backgroundClassName}`}
    >
      <div className="text-center tracking-widest my-14">
        <div className="font-black" style={{ fontSize: 40 }}>
          {title}
        </div>
        <div style={{ fontSize: 20 }}>{description}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
