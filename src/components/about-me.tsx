import { IconBrandGithub } from "@tabler/icons-react";
import GlassMorph from "./ui/glass-morph";
import LightGreenGlassMorph from "./ui/light-green-glass-morph";
import SectionHeader from "./ui/section-header";
import SocialIcon from "./ui/social-icon";
import { socialLinks } from "@/lib/social-links";
type Props = {};

function AboutMe({}: Props) {
  return (
    <div id="about-me" className="flex">
      <div className="w-2/5 h-full flex flex-col justify-center items-center py-6">
        <img
          src="/rohit.svg"
          alt="Rohit Patil"
          className="rounded-full w-72 h-72 object-center object-cover"
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
          Building Tomorrow's Solutions, <br /> Learning Today's Lessons 🛠️
        </h1>
        <h2 className="font-semibold text-lg text-justify">
          Hey there! 👋 I'm Rohit Patil, a computer engineering student at Pune
          Institute of Computer Technology. 💻 I'm all about building the
          engines behind apps and websites. I love working on the backend,
          making sure everything runs smoothly and efficiently. Whether it's
          setting up databases, creating APIs, or solving tricky problems, I'm
          here to make sure things work like a charm. Let's team up and bring
          our ideas to life! 🚀
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;
