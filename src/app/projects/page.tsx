import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects/projects";
import { projectPageMetaData } from "@/lib/meta-data";

export const metadata = projectPageMetaData;

function ProjectsPage() {
  return (
    <>
      <Projects />
      <Footer />
    </>
  );
}

export default ProjectsPage;
