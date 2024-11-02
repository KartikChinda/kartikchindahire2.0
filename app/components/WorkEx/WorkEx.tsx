import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/app/constants";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#050c0F",
        color: "#ece6df",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #D5CEA3" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#ece6df] text-2xl mb-1 font-bold">
          {experience.title}
        </h3>
        <p className="text-xl font-semibold">{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 text-[#ece6df]">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-md pl-1 tracking-wider font-subtext "
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkEx = () => {
  return (
    <>
      <section className=" pt-20 bg-black ">
        <div className="w-full bg-black text-white  flex flex-col items-center ">
          <div className="w-[90%] flex flex-col justify-end items-end xl:pr-8  -mb-28">
            <p className="text-base md:text-xl mb-1 mt-5 mr-2 font-extralight font-subtext-heebo text-white ">
              A glimpse into my professional journey
            </p>
            <p className="text-5xl md:text-8xl mt-2 font-bold tracking-wide text-right text-[#F4F9FF] font-hero-heading">
              Work Experience.
            </p>
          </div>
          <div className="mt-40 flex flex-col">
            <VerticalTimeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkEx;
