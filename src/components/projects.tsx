import React from "react";
import SectionHeader from "./ui/section-header";
import { projectsList } from "@/lib/projects-list";
import ProjectItem from "./ui/project-item";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      id="about-me"
      className="flex flex-col items-center justify-center p-10"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="py-10">
        {projectsList.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
