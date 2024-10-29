import React from "react";
import { Quotes } from "@phosphor-icons/react";
import { testimonials } from "../constants";
import { div } from "framer-motion/client";

const Testimonials = () => {
  return (
    <section className=" bg-backgroundPeach p-8 pt-20">
      <div className="flex justify-start items-start w-full gap-4">
        <div className=" ">
          <p className="text-xl mb-1 mt-5 font-extralight font-subtext-heebo text-black ">
            Narcissism begets humility, so
          </p>
          <p className="text-5xl md:text-7xl mt-2 font-semibold tracking-wide text-black font-hero-heading">
            Here's what others have to say
          </p>
        </div>
        <div className=" mt-10 md:mt-0">
          <Quotes size={60} weight="fill" />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-10 md:mt-20 justify-center">
        {testimonials &&
          testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="p-4 text-black w-[400px] md:w-[350px] lg:w-[700px] "
              >
                <p className="px-5 mt-3 text-base font-subtext text-black font-subtext-heebo">
                  "{testimonial.testimonial}"
                </p>
                <h2 className="text-black text-xl mt-10  font-bold px-5 font-subtext-lora">
                  {testimonial.name}
                </h2>
                <h2 className="text-black text-base pb-5  px-5 font-subtext-lora">
                  {testimonial.designation}, {testimonial.company}
                </h2>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Testimonials;
