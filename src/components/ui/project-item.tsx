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
import HoverUnderlineText from "./hover-underline-text";

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
    <div className="font-normal h-fit rounded-md text-sm flex flex-col md:flex-row w-fit lg:w-8/12 group justify-center items-center hover:cursor-pointer bounce-up md:bounce-side">
      {cover_image ? (
        <Image
          src={cover_image}
          alt={name}
          width={1000}
          height={1000}
          className="w-fit md:w-5/12 h-full object-cover object-center rounded-md"
        />
      ) : null}
      <div className="md:w-7/12 flex flex-col justify-center md:px-6 py-2">
        <HoverUnderlineText
          className="text-light-green"
          underlineColor="bg-light-green"
        >
          {name}
        </HoverUnderlineText>
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
