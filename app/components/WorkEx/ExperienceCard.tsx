import React from "react";
import { StaticImageData } from "next/image";

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
    <div className="h-full w-full rounded-2xl flex justify-center items-center text-white font-subtext-heebo">
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
    </div>
  );
};

export default ExperienceCard;
