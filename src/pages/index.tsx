import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

const IndexPage: React.FC<PageProps> = () => {
  const externalLinks = [
    {
      title: "블로그",
      description: "비수의 개발 창고",
      href: "https://bisue.github.io",
    },
    {
      title: "Github",
      description: "깃허브",
      href: "https://github.com/Bisue",
    },
  ];

  const internalLinks = [
    {
      title: "소개",
      description: "Introduction",
      target: "#introduction",
    },
    {
      title: "교육",
      description: "Educations",
      target: "#educations",
    },
    {
      title: "경험",
      description: "Experiences",
      target: "#experiences",
    },
    {
      title: "프로젝트",
      description: "Projects",
      target: "#projects",
    },
  ];

  return (
    <Layout>
      <Splash>
        <div className="flex items-center justify-between w-full max-w-4xl mb-24">
          <div>
            <div className="mb-3" style={{ fontSize: 24 }}>
              풀스택을 지향하는 개발자
            </div>
            <div className="font-black" style={{ fontSize: 64 }}>
              <span className="text-emerald-500">변찬혁</span>입니다!
            </div>
          </div>
          <img
            className="rounded-full border-2 border-white w-64 h-64"
            src="/img/profile.jpg"
            alt="변찬혁"
          />
        </div>
        <div className="flex items-center gap-32 mb-10">
          {externalLinks.map((link) => (
            <ExternalLink link={link}></ExternalLink>
          ))}
        </div>
        <div className="flex items-center gap-16">
          {internalLinks.map((link) => (
            <InternalLink link={link}></InternalLink>
          ))}
        </div>
      </Splash>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>변찬혁 - 풀스택을 지향하는 개발자</title>
);
