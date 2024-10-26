import React from "react";
import Vinyl from "./Vinyl/Vinyl";

const Hero = () => {
  return (
    <>
      <div className="h-[30vh] flex justify-center items-center text-[200px] font-hero-heading">
        <span>Kartik Chinda</span>
      </div>
      <div>
        <Vinyl />
      </div>
    </>
  );
};

export default Hero;
