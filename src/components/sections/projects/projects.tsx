"use client";
import { projectsList } from "@/lib/projects-list";
import React, { useState } from "react";
import Navbar from "./navbar";
import ProjectList from "./projects-list";

type Props = {};

const Projects = (props: Props) => {
  const technologies = projectsList
    .map((project) => project.technologies)
    .flat();

  const uniqueTechnologies = Array.from(new Set(technologies));
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  return (
    <>
      <Navbar
        activeFilters={activeFilters}
        filters={uniqueTechnologies}
        setActiveFilters={setActiveFilters}
      />
      <ProjectList activeFilters={activeFilters} projectsList={projectsList} />
    </>
  );
};

export default Projects;
