import React, { useEffect, useRef, useState } from "react";
import { experiences } from "@/app/constants";
import ExperienceCard from "./ExperienceCard";

export default function WorkExNew() {
  const [shadowColor, setshadowColor] = useState("black");
  const colorsArray = ["#A594F9", "#E8F994", "#94F9D8", "#F994B5"];
  const observerRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      //   for (const entry of entries) {
      //     if (entry.isIntersecting) {
      //       const index = Number(entry.target.getAttribute("data-index"));
      //       setshadowColor(colorsArray[index % colorsArray.length]);
      //       console.log("Here, ", colorsArray[index % colorsArray.length]);
      //       //   break;
      //     }
      //   }
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);
      if (intersectingEntry) {
        // Find the index of the intersecting element using observerRef
        const index = observerRef.current.indexOf(
          intersectingEntry.target as HTMLDivElement
        );
        if (index !== -1) {
          setshadowColor(colorsArray[index % colorsArray.length]);
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    for (let i = 0; i < observerRef.current.length; i++) {
      const element = observerRef.current[i];
      if (element) observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-20 pb-[25vh] w-full relative bg-black flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center w-[85%] h-[80vh]  sticky top-20  p-2 bg-black text-white overflow-auto rounded-xl"
        style={{
          boxShadow: `-50px 0 70px ${shadowColor}, 50px 0 70px ${shadowColor}`,
          transition: "box-shadow 0.5s ease-in-out",
        }}
      ></div>
      {experiences.map((exp, index) => (
        <div
          id={`${index}`}
          className="lg:h-[80vh] w-[85%] z-10 bg-black flex justify-center items-center  md:mb-0 rounded-xl"
          ref={(el) => {
            observerRef.current[index] = el;
          }}
        >
          <ExperienceCard experience={exp} />
        </div>
      ))}
    </div>
  );
}
