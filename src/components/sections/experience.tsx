import React from "react";
import SectionHeader from "../ui/section-header";
import experienceList from "@/lib/experience-list";
import ExperienceItem from "../ui/experience-item";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div
      id="experience"
      className="w-full flex flex-col justify-center items-center scroll-mt-28"
    >
      <SectionHeader>Experience</SectionHeader>
      <h1 className="py-4 md:py-8 text-2xl sm:text-3xl md:text-4xl text-gray-200 font-bold text-center">
        Career Highlights 💼
      </h1>
      {experienceList.map((experience) => (
        <ExperienceItem
          key={experience.company + experience.title}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default Experience;
