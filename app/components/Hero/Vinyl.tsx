"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import vinyl from "@/public/vinyl.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { textPrimary, textSecondary } from "@/app/constants";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const Vinyl = () => {
  return (
    <div id="container" className="bg-backgroundWhite h-screen w-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 358 358"
        width="800px"
        height="600px"
        id="text-primary"
      >
        {/* defs is used to define reusable components */}
        <defs>
          <path id="def-1" />
        </defs>
        <path
          id="path-1"
          // path received from an online tool that can help create custom paths.
          d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405"
        />
        <text>
          {textPrimary.map((text, index) => {
            return (
              <textPath
                key={index}
                id={index.toString()}
                xlinkHref="def-1"
                startOffset="-25$"
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
      >
        {/* defs is used to define reusable components */}
        <defs>
          <path id="def-2" />
        </defs>
        <path
          id="path-2"
          // path received from an online tool that can help create custom paths.
          d="M -393 60 C -53 60 -70 365 180 365 C 421 352 407 60 725 56"
        />
        <text x="50%" y="50%" dominantBaseline="end" textAnchor="middle">
          <textPath id="text-secondary" xlinkHref="path-2" startOffset="37%">
            {textSecondary}
          </textPath>
        </text>
      </svg>

      <div></div>
    </div>
  );
};

export default Vinyl;
