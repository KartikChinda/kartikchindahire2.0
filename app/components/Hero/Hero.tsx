import React, { useState } from "react";
import Vinyl from "./Vinyl/Vinyl";
import AboutMe from "./AboutMe";

const Hero = () => {
  const [displayVinyl, setDisplayVinyl] = useState(false);
  setTimeout(() => {
    setDisplayVinyl(true);
  }, 2500);
  return (
    <div>
      {/* <div className="h-[30vh] flex justify-center items-center text-[200px] font-hero-heading">
        <span>Kartik Chinda</span>
      </div> */}
      <div className="flex justify-start items-start h-[150vh] border-4 border-red-300 overflow-hidden">
        {displayVinyl && <Vinyl />}
      </div>
      {/* <div>{isVisible && <AboutMe />}</div> */}
    </div>
  );
};

export default Hero;
