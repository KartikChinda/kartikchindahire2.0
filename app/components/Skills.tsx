import Gradient from "@/app/components/Gradients/index";
import React from "react";

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

        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 justify-center items-center">
          <div className="w-[150px] md:w-[350px] 3xl:w-[400px] border-2 min-h-20 flex justify-center items-center">
            Hello
          </div>
          <div className="w-[150px] md:w-[350px] 3xl:w-[400px] border-2 min-h-20 flex justify-center items-center">
            Hello
          </div>
          <div className="w-[150px] md:w-[350px] 3xl:w-[400px] border-2 min-h-20 flex justify-center items-center">
            Hello
          </div>
          <div className="w-[150px] md:w-[350px] 3xl:w-[400px] border-2 min-h-20 flex justify-center items-center">
            Hello
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
