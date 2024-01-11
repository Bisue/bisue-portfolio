import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";
import Section from "../components/Section";
import GoToTop from "../components/GoToTop";

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
    <>
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
        <Section
          backgroundClassName="bg-pattern-zigzag-emerald"
          title="소개"
          description="Introduction"
          id="introduction"
        >
          <div className="flex items-center gap-4 mb-16">
            <img
              className="rounded-full border border-white w-32 h-32"
              src="/img/profile.jpg"
              alt="변찬혁"
            />
            <div>
              <div className="font-black" style={{ fontSize: 36 }}>
                변찬혁
              </div>
              <div style={{ fontSize: 24 }}>1999.08.19</div>
              <div style={{ fontSize: 20 }}>bdu00chch@gmail.com</div>
            </div>
          </div>
          <div className="mb-32 pl-36" style={{ fontSize: 20 }}>
            안녕하세요, <b>풀스택</b>을 지향하는 개발자 <b>변찬혁</b>입니다.
            <br />
            <br />
            어린시절 <b>Visual Basic</b>과 <b>플래시 게임 제작</b>에 흥미를 느낀
            것을 시작으로
            <br />
            <b>동국대 학사 공지 알리미</b>,{" "}
            <b>Vuepress-hope 한국어 지원 버그 수정 기여</b> 등의 가벼운 사이드
            프로젝트부터,
            <br />
            <b>건설업체 대상 분양사이트 제작</b>, <b>지역 소식 공유 플랫폼</b>{" "}
            등의 외주 프로젝트를 진행하며 경험을 쌓아왔습니다.
            <br />
            <br />
            이전까지의 경험들을 바탕으로, <b>신입</b> 개발자로 취업하여{" "}
            <b>직업으로서의 개발</b>을 시작하려고 합니다.
          </div>
        </Section>
        <Section
          backgroundClassName="bg-pattern-tictactoe-emerald"
          title="교육"
          description="Educations"
          id="educations"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section
          backgroundClassName="bg-pattern-hexaon-cyan"
          title="경험"
          description="experiences"
          id="experiences"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section
          backgroundClassName="bg-pattern-circuit-blue"
          title="프로젝트"
          description="Projects"
          id="projects"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
      </Layout>
      <GoToTop></GoToTop>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>변찬혁 - 풀스택을 지향하는 개발자</title>
);
