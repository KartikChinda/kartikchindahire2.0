import React, { useState } from "react";
import Vinyl from "./Vinyl/Vinyl";

const Hero = () => {
  const [displayVinyl, setDisplayVinyl] = useState(false);
  setTimeout(() => {
    setDisplayVinyl(true);
  }, 1000);
  return (
    <div>
      <div className="flex justify-start items-start h-[130vh] md:h-[150vh] overflow-hidden bg-[#F4F9FF]">
        {displayVinyl && <Vinyl />}
      </div>
    </div>
  );
};

export default Hero;
