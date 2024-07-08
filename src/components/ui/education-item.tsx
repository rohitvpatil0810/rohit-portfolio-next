import { Education } from "@/lib/education-list";
import React from "react";
import HoverUnderlineText from "./hover-underline-text";
import { IconMapPin } from "@tabler/icons-react";

type Props = {
  education: Education;
};

const EducationItem = ({ education }: Props) => {
  return (
    <div className="py-4 tab:w-8/12 lg:w-7/12 flex flex-col tab:flex-row group">
      <div className="tab:w-1/5">
        <h3 className="text-lg text-gray-400 font-semibold py-2">
          {education.duration}
        </h3>
      </div>
      <div className="tab:w-4/5">
        <h1 className="text-xl text-gray-200 font-bold flex flex-wrap md:items-center space-x-1">
          <HoverUnderlineText
            className="group-hover:text-light-green"
            underlineColor="bg-green-400"
          >
            {education.school}
          </HoverUnderlineText>
          <div className="text-gray-300 text-base font-extralight flex justify-start items-center space-x-1">
            <IconMapPin size={20} className="mx-1" />
            <span className="inline w-full">{education.location}</span>
          </div>
        </h1>
        <h2 className="text-gray-300 pt-1 flex justify-start items-center space-x-1">
          <span className="mr-2">
            {education.degree}
            {education.major ? `, ${education.major}` : null}
          </span>
        </h2>
        {/* <h2 className="text-gray-300 pt-1 flex justify-start items-center space-x-1">
         <h2 className="text-gray-300 pt-1 flex justify-start items-center space-x-1">
          <span className="inline w-full">{education.grade}</span>
        </h2> */}
      </div>
    </div>
  );
};

export default EducationItem;
