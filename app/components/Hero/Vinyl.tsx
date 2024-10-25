"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import vinyl from "@/public/vinyl.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { textPrimary, textSecondary } from "@/app/constants";
import profile from "@/public/profile.jpg";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const Vinyl = () => {
  const container = useRef<any>();

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
          duration: 8,
          repeat: -1,
          delay: delay,
        });
      };

      // this is from the id's we gave the texts
      animateText("#Text0", 0);
      animateText("#Text1", 2.5);
      animateText("#Text2", 5);

      gsap.to("#disk", {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: container }
  );

  return (
    <div
      id="container"
      ref={container}
      className="bg-backgroundWhite w-[100vw] h-[100vh] relative flex flex-col justify-center items-center overflow-hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 358 358"
        width="full"
        height="800px"
        id="text-primary"
        fill="#EEEEEE"
        className="vinyl-svgs absolute top-[20%] overflow-visible"
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
                className="text-5xl font-hero-heading font-black"
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
        fill="#EEEEEE"
        className="absolute top-[20%] overflow-visible"
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
            className=" fill-current text-black text-4xl border-2 border-black font-hero-heading font-bold"
          >
            {textSecondary}
          </textPath>
        </text>
      </svg>

      <div
        id="disk"
        className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full flex justify-center items-center"
      >
        <Image src={vinyl} alt="vinyl" className=" vinyl-images" />
        <div id="coverImg">
          <Image
            src={profile}
            alt="Kartik"
            className="vinyl-images absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Vinyl;
