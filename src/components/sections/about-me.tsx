import Image from "next/image";
import LightGreenGlassMorph from "../ui/light-green-glass-morph";
import SectionHeader from "../ui/section-header";
import SocialIcon from "../ui/social-icon";
import { socialLinks } from "@/lib/social-links";
import aboutMe from "@/lib/about-me";
type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="flex p-10 bg-light-green bg-opacity-5">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <Image
          src="/rohit.svg"
          alt="Rohit Patil"
          className="rounded-full w-72 h-72 object-center object-cover"
          width={288}
          height={288}
        />
        <LightGreenGlassMorph className="rounded-xl w-64 py-1 flex justify-center items-center -translate-y-12">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.sociallink}
              icon={link.icon}
              sociallink={link.sociallink}
              className="m-2"
            />
          ))}
        </LightGreenGlassMorph>
      </div>
      <div className="w-3/5">
        <SectionHeader>About Me</SectionHeader>
        <h1 className="py-8 text-4xl text-light-green font-bold">
          Building Tomorrow&apos;s Solutions, <br /> Learning Today&apos;s
          Lessons 🛠️
        </h1>
        <h2 className="font-semibold text-lg">{aboutMe.aboutMe}</h2>
      </div>
    </div>
  );
}

export default AboutMe;
