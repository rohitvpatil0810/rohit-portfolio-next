import {
  IconBrandGithub,
  IconCode,
  IconExternalLink,
  IconExternalLinkOff,
  IconLink,
  IconPoint,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Chip from "./chip";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  cover_image?: string;
  live_preview?: string;
  github_link?: string;
};

type Props = {
  project: Project;
};

function ProjectItem({
  project: {
    name,
    description,
    technologies,
    cover_image,
    live_preview,
    github_link,
  },
}: Props) {
  return (
    <div className="font-light w-1/3 rounded-md text-sm">
      {cover_image ? (
        <Image
          src={cover_image}
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center rounded-t-md"
        />
      ) : null}
      <div className="px-4 py-2 border-l-2 border-r-2 border-b-2 rounded-b-md border-light-green">
        <h1 className="text-xl font-semibold pt-2 pb-1">{name}</h1>
        <h2 className="text-gray-200 py-1">{description}</h2>
        <div className="flex flex-wrap py-1">
          {technologies.map((technology) => (
            <Chip key={technology}>{technology}</Chip>
          ))}
        </div>
        <div className="flex space-x-4 py-1">
          {live_preview && (
            <a href={live_preview} target="_blank" rel="noopener noreferrer">
              <IconExternalLink className="hover:text-light-green" />
            </a>
          )}
          {github_link && (
            <a href={github_link} target="_blank" rel="noopener noreferrer">
              <IconBrandGithub className="hover:text-light-green" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
