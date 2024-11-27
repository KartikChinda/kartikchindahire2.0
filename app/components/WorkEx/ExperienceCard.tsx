import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface experienceCardProps {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({
  experience,
}: {
  experience: experienceCardProps;
}) => {
  return (
    <div className="h-full w-full rounded-2xl flex justify-center items-center text-white font-subtext-heebo p-8">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:justify-between w-full ">
        <div className="rounded-xl w-[80%] 2xl:w-[40%] flex justify-center items-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="my-2 rounded-full shadow-lg scale-[0.7]"
          />
        </div>

        {/* Experience text and points */}
        <div className=" mt-4 font-subtext-heebo lg:text-lg lg:w-[60%] 2xl:scale-110 2xl:px-[30px]">
          <p className="font-bold text-xl">{experience.title}</p>

          <p className="text-sm font-semibold mb-4 font-subtext-lora">
            {experience.company_name}
          </p>
          <span className="py-1 px-3 rounded-2xl text-xs border-2 w-auto my-4 border-b-lightPeachbg">
            {experience.date}
          </span>

          <div className="mt-4 lg:mt-8 lg:pr-8">
            <ul className="list-disc pl-2 text-lightPeachbg">
              {experience.points.map((point, index) => (
                <li key={index} className="text-sm my-4 ">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
