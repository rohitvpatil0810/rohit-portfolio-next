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
      <div className="py-6 flex w-full overflow-hidden space-x-12 group">
        <div className="animate-loop-scroll flex space-x-12 group-hover:paused">
          {skillsList.map((skill) => (
            <SkillIcon key={skill.name} skillName={skill.name}>
              {skill.logo}
            </SkillIcon>
          ))}
        </div>
        <div
          className="animate-loop-scroll flex space-x-12 group-hover:paused"
          aria-hidden="true"
        >
          {skillsList.map((skill) => (
            <SkillIcon key={skill.name} skillName={skill.name}>
              {skill.logo}
            </SkillIcon>
          ))}
        </div>
        <div
          className="animate-loop-scroll flex space-x-16 group-hover:paused"
          aria-hidden="true"
        >
          {skillsList.map((skill) => (
            <SkillIcon key={skill.name} skillName={skill.name}>
              {skill.logo}
            </SkillIcon>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
