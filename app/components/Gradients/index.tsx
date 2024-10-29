import { linearGradient } from "framer-motion/client";
import React from "react";

interface GradientProps {
  colorFrom: string;
  colorTo: string;
  fromPercentage?: string;
}

const Gradient = ({ colorFrom, colorTo, fromPercentage }: GradientProps) => {
  return (
    <div
      className="h-[10vh] md:h-[20vh] w-full m-0 p-0"
      style={{
        background: `linear-gradient(to bottom, ${colorFrom} ${fromPercentage}, ${colorTo})`,
      }}
    ></div>
  );
};

export default Gradient;
