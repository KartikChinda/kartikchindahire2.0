import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { section } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WorkEx = () => {
  const svgRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    // Select each ball by its class and apply a scroll-triggered reveal
    // const balls = [".ball01", ".ball02", ".ball03", ".ball04"];

    // balls.forEach((ball, index) => {
    //   gsap.fromTo(
    //     ball,
    //     { autoAlpha: 0, scale: 0.5 }, // Start invisible
    //     {
    //       autoAlpha: 1,
    //       scale: 1,
    //       duration: 0.005,
    //       ease: "elastic(2.5, 1)",
    //       scrollTrigger: {
    //         trigger: svgRef.current,
    //         scrub: true,
    //         start: `${Math.pow(index, 2) * 100}vh top`, // Trigger at the top of each 100vh section
    //         end: `${Math.pow(index + 0.5, 2) * 100}vh top`,
    //         // markers: true,
    //         // end: `${(index + 1) * 100}vh center`, // Remain visible for the next 100vh
    //       },
    //     }
    //   );
    // });

    gsap.to(ballRef.current, {
      motionPath: {
        path: ".theLine",
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      scrollTrigger: {
        trigger: svgRef.current,
        scrub: true,
        start: "top 20%",
        // markers: true,
        end: "bottom top",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className=" pt-20 bg-black ">
      <div className="w-full bg-black text-white  flex flex-col items-center">
        <div className="w-[90%] flex flex-col justify-end items-end  -mb-28">
          <p className="text-base md:text-xl mb-1 mt-5 font-extralight font-subtext-heebo text-white ">
            A glimpse into my professional journey
          </p>
          <p className="text-5xl md:text-8xl mt-2 font-bold tracking-wide text-right text-[#F4F9FF] font-hero-heading">
            Work Experience.
          </p>
        </div>
        <div className="w-full h-[150vh] md:h-full flex items-center justify-between mt-24 relative">
          <svg
            id="svg-stage"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
            className="w-full scale-[2] md:scale-100 mx-auto overflow-visible"
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
          </svg>
          <div
            ref={ballRef}
            className="ball absolute bg-white rounded-full"
            style={{
              width: "40px",
              height: "40px",
              opacity: 1,
            }}
          ></div>
          <div
            className="absolute border-2 rounded-xl 
            
            top-[5%] 
            w-[300px] h-[200px]
          md:w-[400px] md:h-[280px]
          xl:w-[650px] xl:h-[400px] 
          
          left-[20%] flex justify-center items-center"
          >
            Hello
          </div>
          <div
            className="absolute border-2 rounded-xl top-[28%]  md:w-[400px] md:h-[280px]
          xl:w-[650px] xl:h-[400px]
           w-[300px] h-[200px]
           left-[20%]
          md:left-[45%] flex justify-center items-center"
          >
            Hello
          </div>
          <div
            className="absolute border-2 rounded-xl top-[51%]  md:w-[400px] md:h-[280px]
          xl:w-[650px] xl:h-[400px]
           w-[300px] h-[200px]
left-[10%]
          md:left-[15%] flex justify-center items-center"
          >
            Hello
          </div>
          <div
            className="absolute border-2 rounded-xl top-[75%] md:w-[400px] md:h-[280px]
             w-[300px] h-[200px]
left-[20%]
          xl:w-[650px] xl:h-[400px]  md:left-[35%] flex justify-center items-center"
          >
            Hello
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEx;
