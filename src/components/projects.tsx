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
      <div className="flex flex-col items-center py-10">
        {projectsList.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
