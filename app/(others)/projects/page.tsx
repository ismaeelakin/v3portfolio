"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useEffect, useState, Children } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiOpensourceinitiative,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiPython,
  SiFlask,
  SiLangchain,
  SiNginx,
  SiLinux,
  SiGnubash,
  SiPostgresql,
  SiSocketdotio,
  SiTailwindcss,
  SiSupabase,
  SiExpress,
  SiNodedotjs,
  SiVite,
  SiJirasoftware,
  SiJupyter,
  SiGithub,
  SiJitsi,
  SiRedux,
  SiOpenai,
  SiVercel,
  SiCloudinary,
  SiMongodb,
  SiMatterdotjs,
} from "react-icons/si";
import Card from "@/components/Card/Card";
import projects from "@/app/(others)/projects/projects";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProjectTypes } from "@/types";
import Head from "@/extras/head";

export default function Projects() {
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<ProjectTypes[]>([]);

  const filter = (filt: string) => {
    if (filters.includes(filt)) {
      return setFilters((valv) => [
        ...valv.filter((targetFilt) => targetFilt !== filt),
      ]);
    } else {
      return setFilters((filts) => [...filts, filt]);
    }
  };

  useEffect(() => {
    if (filters.length) {
      let filtedProjects = projects.filter((project) => {
        let vals = project.category.filter((projectCategory) => {
          if (filters.includes(projectCategory)) return true;
        });
        if (vals.length) return true;
      });
      setFilteredList(filtedProjects);
    } else {
      setFilteredList(projects);
    }
  }, [filters]);

  return (
    <>
      <Head>
        <title>Ismaeel Akin - Projects</title>
        <meta
          name="description"
          content="Check out what I've been working on."
        />
      </Head>
      <div>
        <BoxLayout
          sideBar={
            <Sidebar
              contents={[
                {
                  title: "projects",
                  content: [
                    { icon: <SiReact size={20} />, name: "React" },
                    { icon: <SiNextdotjs size={20} />, name: "NextJs" },
                    { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
                    { icon: <SiTypescript size={20} />, name: "Typescript" },
                    { icon: <SiJavascript size={20} />, name: "JavaScript" },
                    { icon: <SiHtml5 size={20} />, name: "HTML5" },
                    { icon: <SiCss3 size={20} />, name: "CSS3" },
                    { icon: <SiJitsi size={20} />, name: "Jitsi Meet" },
                    { icon: <SiSupabase size={20} />, name: "Supabase" },
                    { icon: <SiSocketdotio size={20} />, name: "Socket.io" },
                    { icon: <SiExpress size={20} />, name: "Express" },
                    { icon: <SiNodedotjs size={20} />, name: "Node.js" },
                    {
                      icon: <SiOpensourceinitiative size={20} />,
                      name: "OpenSource Contributions",
                    },
                    { icon: <SiPostgresql size={20} />, name: "PostgreSQL" },
                    { icon: <SiPython size={20} />, name: "Python" },
                    { icon: <SiFlask size={20} />, name: "Flask" },
                    { icon: <SiLangchain size={20} />, name: "LangChain" },
                    { icon: <SiJupyter size={20} />, name: "Jupyter" },
                    { icon: <SiLinux size={20} />, name: "Linux" },
                    { icon: <SiGnubash size={20} />, name: "Bash Scripting" },
                    { icon: <SiC size={20} />, name: "C" },
                    { icon: <SiCplusplus size={20} />, name: "C++" },
                    { icon: <SiNginx size={20} />, name: "Nginx" },
                    { icon: <SiMatterdotjs size={20} />, name: "Markdown" },
                    { icon: <SiMongodb size={20} />, name: "MongoDB" },
                  ].map((stack, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-2 items-center max-h-72 overflow-y-auto"
                    >
                      <input
                        id={`entry1${index}`}
                        type="checkbox"
                        checked={filters.includes(stack.name)}
                        onChange={() => filter(stack.name)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`entry1${index}`}
                        className="flex items-center"
                      >
                        {stack.icon}
                        <span className="ml-2">{stack.name}</span>
                      </label>
                    </div>
                  )),
                },
              ]}
            />
          }
          navTitle={filters.length ? filters.join("; ") : "Projects"}
          resetEntries={() => setFilters([])}
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-12 w-full pt-6 px-8 pb-12 grid-rows-[masonry] box-border overflow-y-scroll lg:grid-cols-2 md:block">
            {Children.toArray(
              filteredList.map((project) => (
                <div className="box-content h-full flex flex-col">
                  <div className="mb-4 text-sm">
                    <span className="text-[#5565e8]">{`//`}</span>
                    <span className="text-textColor">{`_${project.name}`}</span>
                  </div>
                  <Card
                    alt={project.name}
                    previewLink={project.previewLink}
                    mainType={project.mainType}
                    previewImg={project.previewImg}
                    description={project.description}
                    githubUrl={project.githubUrl}
                  />
                </div>
              ))
            )}
          </div>
        </BoxLayout>
      </div>
    </>
  );
}
