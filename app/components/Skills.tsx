import Gradient from "@/app/components/Gradients/index";
import React, { useEffect, useRef } from "react";
import { skills } from "../constants";
import Image from "next/image";
import Card from "@/public/card.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const toStartRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const cards = [".card-1", ".card-2", ".card-3", ".card-4"];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 0 },
        {
          y: (1 - (index + 1) * 0.1) * 100,
          ease: "linear",
          scrollTrigger: {
            start: "top bottom", // Start when the top of the cards hits the bottom of the viewport
            end: "bottom top",
            trigger: toStartRef.current,
            invalidateOnRefresh: true,
            markers: true,
            scrub: 0,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Gradient colorArray={["#F1EFF4", "#FFF8F0"]} />
      <section ref={toStartRef} className=" bg-backgroundPeach p-8 h-[500vh]">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-2xl  mt-5 font-extralight font-subtext-heebo text-black ">
            Jack of all trades,
          </p>
          <p className="text-5xl md:text-7xl  font-semibold tracking-wide text-black font-hero-heading">
            Master of some.
          </p>
        </div>

        <div
          className="mt-[100px]
        flex flex-wrap
        w-full gap-8 justify-center items-center"
        >
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="w-[300px] md:w-[300px] 3xl:w-[400px] h-[450px] flex flex-col justify-start pt-20 items-center relative"
              >
                <div className="pt-4 text-3xl font-subtext-heebo font-semibold">
                  {skill.heading}
                </div>
                <div className="mt-4 font-subtext-heebo flex justify-start items-start flex-col w-[50%] text-xl italic font-extralight">
                  {skill.skills.map((currSkill) => {
                    return <p>{currSkill}</p>;
                  })}
                </div>
                <Image
                  //   data-speed={`${
                  //     skill.id === 1 || skill.id === skills.length
                  //       ? "0.5"
                  //       : "0.35"
                  //   } `}
                  src={Card}
                  alt="card"
                  height={450}
                  width={300}
                  className={`absolute top-0 card-${skill.id}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;

// // ParallaxBox.tsx
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ParallaxBox = () => {
//   useEffect(() => {
//     // Create a timeline for GSAP animations
//     const ctx = gsap.context(() => {
//       // Apply parallax effect to any element with a data-speed attribute
//       gsap.to("[data-speed]", {
//         y: (i, el) =>
//           (1 - parseFloat(el.getAttribute("data-speed"))) * window.innerHeight,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".box-container",
//           start: "top bottom", // Start when the top of the box container hits the bottom of the viewport
//           end: "bottom top", // End when the bottom of the box container hits the top of the viewport
//           scrub: true, // Smooth scrubbing
//           markers: true, // Enable markers for debugging (remove in production)
//         },
//       });
//     });

//     // Cleanup function to kill the animation and triggers
//     return () => {
//       ctx.revert(); // Revert all GSAP changes on unmount
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center relative h-[300vh]">
//       <p className="mb-4">
//         Add a <code className="p-1 bg-gray-200">data-speed</code> attribute to
//         any element. 1 = normal scroll speed, 0 = no movement, 0.5 = half-speed,
//         etc.
//       </p>

//       <div className="box-container flex justify-center relative top-[50vh] w-full overflow-visible">
//         <div className="box bg-green-500" data-speed="0.25">
//           0.25
//         </div>
//         <div className="box bg-purple-500" data-speed="0.4">
//           0.4
//         </div>
//         <div className="box bg-orange-500" data-speed="0">
//           0
//         </div>
//         <div className="box bg-red-500" data-speed="1">
//           1
//         </div>
//         <div className="box bg-blue-500" data-speed="0.75">
//           0.75
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxBox;
