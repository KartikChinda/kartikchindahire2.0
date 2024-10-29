import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { section } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WorkEx = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Select each ball by its class and apply a scroll-triggered reveal
    const balls = [".ball01", ".ball02", ".ball03", ".ball04"];

    balls.forEach((ball, index) => {
      gsap.fromTo(
        ball,
        { autoAlpha: 0, scale: 0.3 }, // Start invisible
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.005,
          ease: "elastic(2.5, 1)",
          scrollTrigger: {
            trigger: svgRef.current,
            scrub: true,
            start: `${Math.pow(index, 2) * 100}vh top`, // Trigger at the top of each 100vh section
            end: `${Math.pow(index + 0.5, 2) * 100}vh top`,
            // markers: true,
            // end: `${(index + 1) * 100}vh center`, // Remain visible for the next 100vh
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="pt-48 bg-black">
      <div className="w-full bg-black text-white min-h-screen flex flex-col items-center">
        <div className="w-[90%] flex flex-col justify-end items-end  -mb-28">
          <p className="text-xl mb-1 mt-5 font-extralight font-subtext-heebo text-white ">
            A glimpse into my professional journey
          </p>
          <p className="text-8xl mt-2 font-bold tracking-wide text-[#F4F9FF] font-hero-heading">
            Work Experience.
          </p>
        </div>
        <div className="relative w-full flex items-center justify-between mt-24">
          <div className="w-1/3 text-center absolute left-0">
            <text className="text01 text-white" x="30" y="0">
              2018
            </text>
            <text className="text02 text-white" x="30" y="80">
              2019
            </text>
            <text className="text03 text-white" x="30" y="160">
              2020
            </text>
            <text className="text04 text-white" x="30" y="240">
              2021
            </text>
          </div>

          <svg
            id="svg-stage"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
            className="w-full  mx-auto overflow-visible"
            ref={svgRef}
          >
            {/* <path
            className="line01 line stroke-white stroke-2"
            d="M 10 200 600 200"
          /> */}

            <path
              className="theLine stroke-white stroke-2"
              d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
              fill="none"
            />

            <circle
              className="ball ball01 fill-white invisible"
              r="20"
              cx="190"
              cy="900" // 80% of the screen height from the path
            />
            <circle
              className="ball ball02 fill-white invisible"
              r="20"
              cx="230"
              cy="150"
            />
            <circle
              className="ball ball03 fill-white invisible"
              r="20"
              cx="327"
              cy="401"
            />
            <circle
              className="ball ball04 fill-white invisible"
              r="20"
              cx="203"
              cy="601"
            />
          </svg>

          <div className="w-1/3 text-center absolute right-0">
            <text className="text05 text-white" x="30" y="0">
              2021
            </text>
            <text className="text06 text-white" x="30" y="80">
              2022
            </text>
            <text className="text07 text-white" x="30" y="160">
              2023
            </text>
            <text className="text08 text-white" x="30" y="240">
              2024
            </text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEx;
