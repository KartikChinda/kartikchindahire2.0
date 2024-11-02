import { projects } from "@/app/constants";
import { div } from "framer-motion/client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-lightPeachbg p-8">
      <div className="flex flex-col justify-start items-start w-full gap-2">
        <p className="text-2xl  mt-5 font-extralight font-subtext-heebo text-black ">
          Gettin' my hands dirty
        </p>
        <p className="text-5xl md:text-7xl  font-semibold tracking-wide text-black font-hero-heading">
          Projects on display.
        </p>
      </div>
      <div className="mt-10 font-subtext-lora font-light tracking-tight text-[#000000a1]">
        I believe in crafting products that leave an intentional, engaging, and
        delightful impression on people. With a blend of storytelling and my
        never ending thirst for learning new technology, all my projects aim to
        deliver long term sustainable systems.
      </div>
      <div className="mt-20 flex flex-col gap-[100px] justify-center items-center">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className=" w-full flex justify-center items-center"
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
