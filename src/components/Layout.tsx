import React from "react";
import { Link, PageProps } from "gatsby";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <header className="text-white absolute top-0 left-0 w-full z-50">
        <div className="flex items-center h-24 container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-12 h-12 border-2 border-white"
              src="/img/logo.jpg"
              alt="Bisue"
            />
            <span className="text-2xl font-black">BISUE</span>
          </div>
          {/* Links */}
          <div className="flex items-center ml-auto gap-2">
            <a href="https://bisue.github.io" target="_blank">
              <img
                className="rounded-full w-8 h-8"
                src="/img/web.svg"
                alt="Blog"
              />
            </a>
            <a href="https://github.com/Bisue" target="_blank">
              <img
                className="rounded-full w-8 h-8"
                src="/img/github.svg"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
