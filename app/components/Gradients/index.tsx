import { linearGradient } from "framer-motion/client";
import React from "react";

interface GradientProps {
  colorArray: string[];
}

const Gradient = ({ colorArray }: GradientProps) => {
  let gradientColors = "";
  // colorArray && gradientColors === colorArray.join(",");

  return (
    <div
      className="h-[10vh] md:h-[20vh] w-full m-0 p-0"
      style={{
        background: `linear-gradient(to bottom, ${
          colorArray ? colorArray.join(", ") : ""
        }`,
      }}
    ></div>
  );
};

export default Gradient;
