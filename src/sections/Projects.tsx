"use client";

import pospadi from "@/assets/images/pospadi.png";
import ztmQuest from "@/assets/images/ztmquest.png";
import aiLandingPage from "@/assets/images/aiLandingPage.png";
import real from "@/assets/images/real.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
  title: string;
  company: string;
  year: string;
  results: { title: string }[];
  link: string;
  image: StaticImport | string;
}

const projects: Project[] = [
  {
    company: "POS-PADI",
    year: "2025",
    title: "Landing Page & Dashboard",
    results: [
      {
        title:
          "Collaborated as a team to develop a responsive landing page adhering to modern web accessibility standards.",
      },
      {
        title:
          "Implemented a fully interactive dashboard with distinct admin and user interfaces.",
      },
      {
        title:
          "Tech stack: React.js, Redux Toolkit, React Router, MUI, and Chakra UI.",
      },
    ],
    link: "https://pospadi.com.ng/home",
    image: pospadi,
  },
  {
    company: "ZTM Quest",
    year: "2025",
    title: "Open Source Project",
    results: [
      {
        title:
          "Collaborated with a team to design and implement core game mechanics, features, and assets for a 2D browser-based game.",
      },
      {
        title:
          "Contributed to front-end development and gameplay functionality using JavaScript, HTML5, and CSS3",
      },
    ],
    link: "https://zero-to-mastery.github.io/ZTM-Quest/",
    image: ztmQuest,
  },
  {
    company: "Light Sass Landing Page",
    year: "2025",
    title: "Landing Page",
    results: [
      {
        title:
          "Developed a responsive landing page for a  fictional AI startup, highlighting its features and services.",
      },
      {
        title:
          "Built using React, TypeScript, Tailwind CSS, and Framer Motion for modern styling and smooth animations.",
      },
    ],
    link: "https://sasslight-3x4e.vercel.app/",
    image: aiLandingPage,
  },
  {
    company: "RealEst",
    year: "2025",
    title: "Real Estate Landing Page",
    results: [
      {
        title:
          "Designed and developed a sleek, responsive landing page for a modern real estate brand, focused on showcasing featured listings, key services, and a strong visual identity.",
      },
      {
        title:
          "Implemented using React, TypeScript, and ShadCN UI components to ensure clean design, accessibility, and a seamless user experience.",
      },
    ],
    link: "https://storied-cajeta-12e9ce.netlify.app/",
    image: real,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div>
        <div className="container">
          <SectionHeader
            eyebrow=""
            title="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences"
          />

          <div className="mt-10 md:mt-20 flex flex-col gap-20 transition-all duration-300 ease-in-out">
            {projects.map((project: Project, projectIndex: number) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Visit Live Site
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src={
                        typeof project.image === "string"
                          ? project.image
                          : project.image && "src" in project.image
                          ? project.image.src.toString()
                          : ""
                      }
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
