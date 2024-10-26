import React, { useState } from "react";
import Vinyl from "./Vinyl/Vinyl";

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
      <div>{displayVinyl && <Vinyl />}</div>
    </div>
  );
};

export default Hero;
