"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import vinyl from "@/public/vinyl.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textPrimary, textSecondary } from "@/app/constants";
import profile from "@/public/profile.jpg";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Vinyl = () => {
  const container = useRef<any>();
  const zoomingRef = useRef<HTMLImageElement>(null);
  const blackBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document
      .getElementById("def-1")
      ?.setAttribute(
        "d",
        document.getElementById("path-1")?.getAttribute("d")!
      );

    document
      .getElementById("def-2")
      ?.setAttribute(
        "d",
        document.getElementById("path-2")?.getAttribute("d")!
      );
  }, []);

  useGSAP(
    () => {
      const animateText = (selector: any, delay: any) => {
        gsap.to(selector, {
          attr: {
            startOffset: "100%",
          },
          ease: "linear",
          duration: 15,
          repeat: -1,
          delay: delay,
        });
      };

      // this is from the id's we gave the texts
      animateText("#Text0", 0);
      animateText("#Text1", 3);
      animateText("#Text2", 6);

      gsap.to("#disk", {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    gsap.to(zoomingRef.current, {
      scale: 10,
      duration: 4,
      ease: "linear",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.to(blackBarRef.current, {
      scale: 5,
      duration: 10,
      ease: "linear",
      delay: 3,
      clipPath: "circle(100% at 50% 50%)",
      scrollTrigger: {
        trigger: container.current,
        start: "top -10%",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      id="container"
      ref={container}
      className="bg-[#F4F9FF] w-[100vw] h-[100vh] relative flex flex-col justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 358 358"
        width="full"
        height="800px"
        id="text-primary"
        fill="#F4F9FF"
        className="vinyl-svgs absolute top-[5%] md:top-[20%] lg:top-[10%] 3xl:top-[15%]
         ipad-pro-portrait:top-[20%] overflow-visible"
      >
        {/* defs is used to define reusable components */}
        <defs>
          <path id="def-1" />
        </defs>
        <path
          id="path-1"
          // path received from an online tool that can help create custom paths.
          d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405"
          className=" fill-transparent"
        />
        <text className=" fill-black">
          {textPrimary.map((text, index) => {
            return (
              <textPath
                key={index}
                id={`Text${index}`}
                xlinkHref="#def-1"
                startOffset="-25%"
                className="text-4xl font-hero-heading font-black"
              >
                {text}
              </textPath>
            );
          })}
        </text>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="600px"
        height="600px"
        id="text-secondary"
        fill="#F4F9FF"
        className="absolute 
        top-[15%] md:top-[35%] lg:top-[10%]
        3xl:top-[25%]
         ipad-pro-portrait:top-[30%]
        overflow-visible"
      >
        {/* defs is used to define reusable components */}
        <defs>
          <path id="def-2" />
        </defs>
        <path
          id="path-2"
          // path received from an online tool that can help create custom paths.
          d="M -393 60 C -53 60 -70 365 180 365 C 421 352 407 60 725 56"
          className="fill-transparent opacity-0"
        />
        <text x="50%" y="50%" dominantBaseline="end" textAnchor="middle">
          <textPath
            id="text-secondary"
            xlinkHref="#def-2"
            startOffset="37%"
            className="block md:hidden fill-current text-black text-4xl border-2 border-black font-subtext-heebo font-thin tracking-tight"
          >
            Kartik Chinda
          </textPath>
          <textPath
            id="text-secondary"
            xlinkHref="#def-2"
            startOffset="37%"
            className="hidden md:block fill-current text-black text-4xl border-2 border-black font-subtext-heebo font-thin tracking-tight"
          >
            {textSecondary}
          </textPath>
        </text>
      </svg>

      <div
        id="disk"
        className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full flex justify-center items-center"
      >
        <Image src={vinyl} alt="vinyl" className=" vinyl-images" />

        <div id="coverImg">
          <Image
            src={profile}
            ref={zoomingRef}
            alt="Kartik"
            className="vinyl-images absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden object-cover z-10"
          />
        </div>
      </div>

      <div className="">
        <div
          ref={blackBarRef}
          className="absolute bottom-0 left-0 w-full bg-black transform scale-y-0 origin-top h-[100vh]"
          style={{
            clipPath: "circle(0% at 50% 50%)", // Initial circular clip-path starts as a point
            transformOrigin: "center", // Ensure scaling happens from the center
            transform: "scale(0)", // Start hidden
          }}
        ></div>
      </div>
    </div>
  );
};

export default Vinyl;
