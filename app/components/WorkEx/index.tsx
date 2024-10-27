import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WorkEx = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01", {}, 0.2)
      .to(".ball03, .text02", {}, 0.33)
      .to(".ball04, .text03", {}, 0.46);

    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: svgRef.current,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    // MAKE IT IN A WAY THAT THE PICTURE IS ON ONE SIDE, AND THE TEXT FOR IT ON THE OTHER.
    <div className="w-full bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold mt-20">
        Scroll to see a timeline animation
      </h1>
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
          className="max-w-3xl mx-auto overflow-visible"
          ref={svgRef}
        >
          <path
            className="line01 line stroke-white stroke-2"
            d="M 10 200 600 200"
          />
          <path
            className="line02 line stroke-white stroke-2"
            d="M 10 400 600 400"
          />
          <path
            className="line03 line stroke-white stroke-2"
            d="M 10 600 600 600"
          />
          <path
            className="line04 line stroke-white stroke-2"
            d="M 10 800 600 800"
          />
          <path
            className="line05 line stroke-white stroke-2"
            d="M 10 1000 600 1000"
          />

          <path
            className="theLine stroke-white stroke-2"
            d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
            fill="none"
          />

          <circle
            className="ball ball01 fill-white invisible"
            r="20"
            cx="50"
            cy="800" // 80% of the screen height from the path
          />
          <circle
            className="ball ball02 fill-white invisible"
            r="20"
            cx="278"
            cy="201"
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
  );
};

export default WorkEx;
