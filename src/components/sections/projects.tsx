import React from "react";
import SectionHeader from "../ui/section-header";
import { projectsList } from "@/lib/projects-list";
import ProjectItem from "../ui/project-item";
import HoverUnderlineText from "../ui/hover-underline-text";
import { IconArrowRight } from "@tabler/icons-react";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-5 lg:p-10 scroll-mt-20"
    >
      <SectionHeader>Projects</SectionHeader>
      <h1 className="py-4 md:py-8 text-2xl sm:text-3xl md:text-4xl text-gray-200 font-bold text-center">
        My Builds, Full of Learnings and Adventures 🎢
      </h1>
      <div className="flex flex-col items-center pt-10 space-y-10 md:space-y-16">
        {projectsList.slice(0, 3).map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
      <a href="/projects" className="pt-3 pb-10 hover:cursor-pointer">
        <HoverUnderlineText
          className="text-base font-bold hover:text-light-green hover:bounce-up"
          underlineColor="bg-light-green"
        >
          <div className="flex justify-center items-center">
            <span>View Full Projects Archieve</span>
            <IconArrowRight className="ml-2" />
          </div>
        </HoverUnderlineText>
      </a>
    </div>
  );
}

export default Projects;
