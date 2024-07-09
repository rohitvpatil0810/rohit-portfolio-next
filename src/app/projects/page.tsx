import ProjectItem from "@/components/ui/project-item";
import { projectsList } from "@/lib/projects-list";
import { IconArrowLeft } from "@tabler/icons-react";

type Props = {};

function ProjectsPage({}: Props) {
  const technologies = projectsList
    .map((project) => project.technologies)
    .flat();

  const uniqueTechnologies = Array.from(new Set(technologies));

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50">
        <div className="my-4 py-2 sm:py-4 flex justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-40">
          <a href="/" className="flex justify-center items-center">
            <IconArrowLeft className="mr-2" />
            <h1 className="text-xl sm:text-2xl">Projects</h1>
          </a>
        </div>
      </nav>
      <div className="mt-10 sm:mt-10 flex flex-col items-center py-10 space-y-10 md:space-y-16">
        {projectsList.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectsPage;
