import Projects from "@/components/sections/projects/projects";
import { projectPageMetaData } from "@/lib/meta-data";

type Props = {};

export const metadata = projectPageMetaData;

function ProjectsPage({}: Props) {
  return (
    <>
      <Projects />
    </>
  );
}

export default ProjectsPage;
