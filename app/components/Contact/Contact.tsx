import Link from "next/link";
import React, { useEffect, useRef } from "react";
import WebGLFluidEnhanced from "webgl-fluid-enhanced";
import Socials from "./Socials";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const simulation = new WebGLFluidEnhanced(containerRef.current!);
    simulation.setConfig({
      densityDissipation: 0.5,
      velocityDissipation: 0.4,
      pressure: 0.5,
      curl: 4,
      colorPalette: ["#5D0E85", "#45056E", "#2D004E"],
      bloom: false,
      colorful: false,
    });
    simulation.start();

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <div
        ref={containerRef}
        className="w-[90%] h-[90%]  opacity-100 relative flex flex-col justify-center items-center z-10 text-white"
      >
        <div className="absolute text-base font-semibold z-10 mb-28 text-gray-300 font-subtext-heebo">
          Have an idea?
        </div>

        <Link
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&to=kartik.chinda@gmail.com"
          }
          target="_blank"
          className="absolute font-black font-hero-heading  text-7xl text-white"
        >
          contact me
        </Link>
        <div className="absolute  font-semibold z-10 bottom-10  font-subtext-heebo">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Contact;
