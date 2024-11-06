import React from "react";
import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4 my-12">
      <h3 className="font-medium text-base mb-3 uppercase">
        RECENTLY COMPLETED WORK
      </h3>
      <h1 className="font-bold text-3xl mb-3">Explore Our Projects</h1>
      <div className="grid grid-cols-1 gap-4 justify-center items-center mt-10">
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
