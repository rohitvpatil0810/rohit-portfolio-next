import React from "react";
import SectionHeader from "../ui/section-header";
import educationList from "@/lib/education-list";
import EducationItem from "../ui/education-item";

type Props = {};

function Education({}: Props) {
  return (
    <div
      id="experience"
      className="w-full py-10 flex flex-col justify-center items-center"
    >
      <SectionHeader>Education</SectionHeader>
      <h1 className="py-8 text-4xl text-gray-200 font-bold">
        My Academic Journey 📚
      </h1>
      {educationList.map((education) => (
        <EducationItem
          key={education.school + education.degree}
          education={education}
        />
      ))}
    </div>
  );
}

export default Education;
