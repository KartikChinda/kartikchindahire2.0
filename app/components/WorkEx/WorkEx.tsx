import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/app/constants";
import Image from "next/image";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "black",
        color: "white",
        marginTop: "50px",
        marginBottom: "50px",
      }}
      visible={true}
      contentArrowStyle={{ borderRight: "7px solid  #D5CEA3" }}
      date={experience.date}
      dateClassName=" font-hero-heading tracking-wide"
      iconStyle={{
        background: experience.iconBg,
        scale: "1.2",
        marginTop: index % 2 === 0 ? "" : "50px",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-white text-2xl mb-1 font-bold font-subtext-lora">
          {experience.title}
        </h3>
        <p className="text-xl font-semibold font-subtext-heebo">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 text-white font-subtext-heebo font-light">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-md pl-1 tracking-wider font-subtext-heebo "
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
      <section className=" py-20 bg-black ">
        <div className="w-full bg-black text-white  flex flex-col items-center ">
          <div className="w-[90%] flex flex-col justify-end items-end xl:pr-8  -mb-20">
            <p className="text-lg md:text-xl mb-1 mt-5 mr-2 font-extralight font-subtext-heebo text-white ">
              A glimpse into my professional journey
            </p>
            <p className="text-6xl md:text-8xl mt-2 font-bold tracking-wide text-right text-[#F4F9FF] font-hero-heading">
              Work Experience.
            </p>
          </div>
          <div className="mt-40 flex flex-col">
            <VerticalTimeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkEx;
