"use client";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
  title: string;
  company: string;
  year: string;
  results: { title: string }[];
  link: string;
  image: StaticImport;
}

type ProjectCategory = "Web Development" | "Full Stack" | "Work Projects";

// Then type the projectsByCategory object
const projectsByCategory: Record<ProjectCategory, Project[]> = {
  "Web Development": [
    {
      company: "Acme Corp",
      year: "2022",
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/4k7IdSLxh6w",
      image: darkSaasLandingPage,
    },
  ],
  "Full Stack": [
    {
      company: "Innovative Co",
      year: "2021",
      title: "Light Saas Landing Page",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      link: "https://youtu.be/7hi5zwO75yc",
      image: lightSaasLandingPage,
    },
  ],
  "Work Projects": [
    {
      company: "Quantum Dynamics",
      year: "2023",
      title: "AI Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/Z7I5uSRHMHg",
      image: aiStartupLandingPage,
    },
  ],
};

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] =
    useState<ProjectCategory>("Web Development");

  return (
    <section className="pb-16 lg:py-24">
      <div>
        <div className="container">
          <SectionHeader
            eyebrow=""
            title="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences"
          />

          {/* Add the tabs */}
          <div className="flex justify-center gap-4 mt-10 pt-10 mx-4 md:mx-0">
            {Object.keys(projectsByCategory).map((category) => (
              <div key={category} className="relative">
                <button
                  onClick={() => setActiveTab(category as ProjectCategory)}
                  role="tab"
                  aria-selected={activeTab === category}
                  aria-controls={`${category}-panel`}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out relative ${
                    activeTab === category
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {category}
                  {activeTab === category && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-300 to-sky-400" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-20 flex flex-col gap-20 transition-all duration-300 ease-in-out">
            {projectsByCategory[activeTab].map(
              (project: Project, projectIndex: number) => (
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
                            key={index} // Add missing key prop
                            className="flex gap-2 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={project.link}>
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          Visit Live Site
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
