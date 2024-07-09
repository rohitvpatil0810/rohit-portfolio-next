import ProjectItem from "@/components/ui/project-item";
import { projectsList } from "@/lib/projects-list";

type Props = {};

function ProjectsPage({}: Props) {
  return (
    <div className="flex flex-col items-center py-10 space-y-10 md:space-y-16">
      {projectsList.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;
