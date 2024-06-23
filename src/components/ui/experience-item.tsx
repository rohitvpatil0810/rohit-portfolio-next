import { Experience } from "@/lib/experience-list";
import {
  IconChevronRight,
  IconExternalLink,
  IconMapPin,
  IconPointFilled,
} from "@tabler/icons-react";
import React from "react";
import Chip from "./chip";
import HoverUnderlineText from "./hover-underline-text";

type Props = {
  experience: Experience;
};

function ExperienceItem({ experience }: Props) {
  return (
    <div className="py-4 w-3/5 flex group">
      <div className="w-1/4">
        <h3 className="text-lg text-gray-400 font-semibold py-1">
          {experience.date}
        </h3>
      </div>
      <div className="w-3/4">
        <h1 className="text-xl text-gray-200 font-bold flex flex-wrap items-center space-x-1">
          <span>{experience.title}</span> <IconPointFilled size={16} />
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <HoverUnderlineText
              className="group-hover:text-light-green"
              underlineColor="bg-green-400"
            >
              {experience.company}
            </HoverUnderlineText>
          </a>
          {experience.experienceLetterLink ? (
            <a
              href={experience.experienceLetterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <IconExternalLink size={20} className="hover:text-light-green" />
            </a>
          ) : null}
        </h1>
        <h2 className="text-gray-300 pt-1 flex justify-start items-center space-x-1">
          <IconMapPin size={20} className="mr-2" />
          <span className="inline w-full">{experience.location}</span>
        </h2>
        <ul className="list-none text-gray-300 pt-2 text-base space-y-2 font-light">
          {experience.description.map((point) => (
            <li key={point} className="flex justify-start">
              <IconChevronRight size={20} className="mr-2 text-green-400" />
              <h1 className="inline w-full">{point}</h1>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap py-2">
          {experience.skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
