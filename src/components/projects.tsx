import React from "react";
import SectionHeader from "./ui/section-header";
import { projectsList } from "@/lib/projects-list";
import ProjectItem from "./ui/project-item";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center p-10"
    >
      <SectionHeader>Projects</SectionHeader>
      <h1 className="py-8 text-4xl text-gray-200 font-bold">
        My Builds, Full of Learnings and Adventures 🎢
      </h1>
      <div className="flex flex-col items-center py-10 space-y-16">
        {projectsList.slice(0, 3).map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Projects;
