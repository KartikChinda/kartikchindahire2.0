import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  website: string;
  github: string;
  skills: {
    link: string;
    imageURL: StaticImageData;
    name: string;
  }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full 3xl:w-[70%]">
      <div className="w-full flex justify-between items-center px-4">
        <p className=" font-subtext-heebo font-extralight text-base italic">
          Project 0{project.id}
        </p>
        <p className=" font-subtext-heebo font-semibold text-2xl tracking-wide">
          {project.name}
        </p>
      </div>
      <div className="mt-2 border-2 border-[#00000080] rounded-xl w-full lg:min-h-[50vh] flex flex-col lg:flex-row justify-start items-center lg:justify-between p-4">
        <div className=" p-2 rounded-xl w-full xl:w-[50%]  flex justify-center items-center ">
          <Link href={project.website} target="__blank">
            <Image
              src={project.image}
              alt={project.name}
              height={400}
              width={400}
              style={{ cursor: "url('/eyes.png'), pointer" }}
              className="my-2 rounded-xl hover:scale-105 lg:hover:scale-[1.30]  duration-300 border-2 border-black shadow-lg lg:scale-125"
            />
          </Link>
        </div>
        <div className="p-4 mt-4 font-subtext-heebo lg:text-lg lg:w-[50%]">
          <div>
            <Link
              href={project.github}
              style={{ cursor: "url('/github.png'), pointer" }}
              target="__blank"
            >
              {project.description}
            </Link>
          </div>
          <div className="flex justify-start items-start gap-2 mt-8 mb-4 relative">
            {project.skills.map((skill) => {
              return (
                <div>
                  <Link href={skill.link}>
                    <Image
                      src={skill.imageURL}
                      alt={skill.link}
                      height={40}
                      width={40}
                      className={`rounded-full  ${
                        skill.name === "Tailwind CSS" ? "invert" : ""
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
