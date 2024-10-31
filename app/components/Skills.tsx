import Gradient from "@/app/components/Gradients/index";
import React from "react";
import { skills } from "../constants";
import { p } from "framer-motion/client";

const Skills = () => {
  return (
    <>
      <Gradient colorArray={["#F1EFF4", "#FFF8F0"]} />
      <section className=" bg-backgroundPeach p-8">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-2xl  mt-5 font-extralight font-subtext-heebo text-black ">
            Jack of all trades,
          </p>
          <p className="text-5xl md:text-7xl  font-semibold tracking-wide text-black font-hero-heading">
            Master of some.
          </p>
        </div>

        <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 md:gap-2 justify-center items-center">
          {skills.map((skill) => {
            return (
              <div className="w-[300px] md:w-[300px] 3xl:w-[400px] border-2 h-[300px] flex flex-col justify-start items-center">
                <div className="pt-4 text-3xl font-subtext-heebo font-semibold">
                  {skill.heading}
                </div>
                <div className="mt-4 font-subtext-heebo flex justify-start items-start flex-col w-[50%] text-xl italic font-extralight">
                  {skill.skills.map((currSkill) => {
                    return <p>{currSkill}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
