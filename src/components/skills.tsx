import { skillsList } from "@/lib/skills-list";
import SectionHeader from "./ui/section-header";
import SkillIcon from "./ui/skill-icon";

type Props = {};

function Skills({}: Props) {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center py-10"
    >
      <SectionHeader>Skills</SectionHeader>
      <h1 className="py-8 text-4xl text-gray-200 font-bold">
        My Arsenal 🛠️, Ever-Expanding and Always Exciting!
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 py-5">
        {skillsList.map((skill) => (
          <SkillIcon key={skill.name} skillName={skill.name}>
            {skill.logo}
          </SkillIcon>
        ))}
      </div>
    </div>
  );
}

export default Skills;
