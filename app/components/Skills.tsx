import Gradient from "@/app/components/Gradients/index";
import React, { useRef } from "react";
import { skills } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const toStartRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Gradient colorArray={["#FCFAF6", "#FFF8F0"]} />
      <section ref={toStartRef} className=" bg-backgroundPeach p-8">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-2xl  mt-5 font-extralight font-subtext-heebo text-black ">
            Jack of all trades,
          </p>
          <p className="text-5xl md:text-7xl  font-semibold tracking-wide text-black font-hero-heading">
            Master of some.
          </p>
        </div>

        <div
          className="mt-[100px]
        flex flex-wrap
        w-full gap-8 justify-center items-center"
        >
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="w-[300px] md:w-[300px] 3xl:w-[400px] h-[450px] flex flex-col justify-start pt-20 items-center relative rounded-3xl border-2 border-black hover:scale-[1.1] duration-300 hover:shadow-2xl"
              >
                <div className="pt-4 text-3xl font-subtext-heebo font-semibold">
                  {skill.heading}
                </div>
                <div className="mt-4 font-subtext-heebo flex justify-start items-start flex-col w-[50%] text-xl italic font-extralight">
                  {skill.skills.map((currSkill, index) => {
                    return <p id={`${index}`}>{currSkill}</p>;
                  })}
                </div>
                {/* <Image
                  //   data-speed={`${
                  //     skill.id === 1 || skill.id === skills.length
                  //       ? "0.5"
                  //       : "0.35"
                  //   } `}
                  src={Card}
                  alt="card"
                  height={450}
                  width={300}
                  className={`absolute top-0 card-${skill.id}`}
                /> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
