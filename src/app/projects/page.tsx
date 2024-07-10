import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects/projects";
import SocialIcon from "@/components/ui/social-icon";
import { projectPageMetaData } from "@/lib/meta-data";
import { SocialLink, socialLinks } from "@/lib/social-links";

type Props = {};

export const metadata = projectPageMetaData;

function ProjectsPage({}: Props) {
  const github: SocialLink = socialLinks[0];

  return (
    <>
      <Projects />
      {/* <div className="flex justify-center items-center">
        <span className="mr-2">For more projects, visit my</span>
        <SocialIcon
          icon={github.icon}
          sociallink={github.sociallink}
          username={github.username}
        />
      </div> */}
      <Footer />
    </>
  );
}

export default ProjectsPage;
