import ProjectItem from "@/components/ui/project-item";
import { Project } from "@/lib/projects-list";

type Props = {
  projectsList: Project[];
  activeFilters: string[];
};

const ProjectList = ({ projectsList, activeFilters }: Props) => {
  return (
    <div className="mt-10 sm:mt-10 flex flex-col items-center py-10 space-y-10 md:space-y-16">
      {projectsList.map((project) =>
        activeFilters.length == 0 ? (
          <ProjectItem key={project.name} project={project} />
        ) : (
          project.technologies.some((tech) => activeFilters.includes(tech)) && (
            <ProjectItem key={project.name} project={project} />
          )
        )
      )}
    </div>
  );
};

export default ProjectList;
