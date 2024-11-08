import React from "react";
import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col py-8 px-4 my-12 lg:px-12 lg:my-48"
    >
      <h3 className="font-medium text-base mb-3 uppercase md:text-lg lg:text-2xl opacity-7">
        RECENTLY COMPLETED WORK
      </h3>
      <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
        Explore Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:gap-8 gap-4 justify-center items-center mt-10">
        {projects.map((item) => (
          <ProjectCard
            image={item.image}
            name={item.name}
            key={item.id}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
