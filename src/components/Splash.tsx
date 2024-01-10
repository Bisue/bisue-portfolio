import React from "react";

const Splash: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative h-screen"
      style={{
        background: "url(/img/splash.webp) center 100%/cover no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        {children}
      </div>
    </div>
  );
};

export default Splash;
