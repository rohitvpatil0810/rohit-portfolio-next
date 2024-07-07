import React from "react";
import SectionHeader from "../ui/section-header";
import educationList from "@/lib/education-list";
import EducationItem from "../ui/education-item";

type Props = {};

function Education({}: Props) {
  return (
    <div
      id="education"
      className="w-full py-10 flex flex-col justify-center items-center scroll-mt-20"
    >
      <SectionHeader>Education</SectionHeader>
      <h1 className="py-4 md:py-8 text-2xl sm:text-3xl md:text-4xl text-gray-200 font-bold text-center">
        My Academic Journey 📚
      </h1>
      <div className="w-full flex flex-col items-start tab:items-center">
        {educationList.map((education) => (
          <EducationItem
            key={education.school + education.degree}
            education={education}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
