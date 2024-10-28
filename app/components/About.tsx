import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
  const ToAnimateRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ToAnimateRef.current) return;

    gsap.fromTo(
      ToAnimateRef.current,
      {
        opacity: 0,
      },
      {
        ease: "power3.inOut",
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ToAnimateRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // used to replay the animation
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-black pb-20">
      <div
        ref={ToAnimateRef}
        id="container"
        className=" p-4 bg-black flex flex-col lg:flex-row justify-center items-stretch"
      >
        <div className="px-8 mt-16 w-full lg:w-[40%] flex justify-center items-start lg:items-end flex-col pr-8 h-full">
          <p className="text-xl mb-1 mt-5 font-extralight font-subtext-heebo text-white ">
            Get to know the next addition to your team
          </p>
          <p className="text-8xl mt-2 font-bold tracking-wide text-[#F4F9FF] font-hero-heading">
            About me.
          </p>
        </div>
        <div className="w-full lg:w-[60%] px-8 lg:px-20">
          <p className="mt-10 text-lg font-extralight leading-8  text-white font-subtext-heebo">
            Before we proceed any further, I must get one thing out in the open.
            I once declared a variable as: <br />
            <br />
            <span className=" text-[#d88ef1] font-bold">long long</span>{" "}
            <span className="text-[#53defa] font-bold">ago</span>
            &nbsp;
            <span className="font-normal text-[#ece6df88]">
              // in a galaxy far, far away
            </span>
            <br /> <br />
            <span className="font-normal">
              Now that we have that out of the way, I am Kartik Chinda, a
              product engineer.
            </span>
            <br />
            From DRDO to DS Bayern, Munich and UWaterloo, Canada, I've tackled
            projects across continents, won hackathons, boosted open-source, and
            published three research papers (a fourth is in the works!).
            <span className="font-bold text-white hover:drop-shadow-lg"></span>
            <br /> <br />
            When I am not creating the most visually stunning websites with
            crisp, clear logic, or writing the most hilarious git commit
            messages, you can find me engrossed in literature, planning a trip
            to the nearest hidden jewel in the arms of nature, or at the movies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
