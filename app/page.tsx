"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading";
import AboutMe from "./components/About";
import WorkEx from "./components/WorkEx/WorkEx";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials";
import Gradient from "./components/Gradients";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";

export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    if (loading === false) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loading]);

  // THIS WILL BE MADE LIKE THE JOURNEY OF THAT CIRCLE, EVERYTHING HAS A CIRCLE, FROM THE TUNNEL TO THE TIMELINE. BUT DO THIS IN A YEAR OR SO, WHEN YOU HAVE MORE SKILLS AND MORE TIME ON YOUR HAND.

  return (
    <main className=" box-border text-black overflow-x-hidden">
      <div>{loading && <Loading setloading={setloading} />}</div>
      <Hero />
      <AboutMe />
      {/* <WorkEx /> */}
      <Projects />
      {/* STOP LENIS ON PHONE, AND FIX THE LOADING AND THE WEBGL DOESNT WORK FOR MOBILE. FIX THAT TOO. And responsiveness for the workex on phone */}
      {/* <Skills /> */}
      <Gradient colorArray={["#FCFAF6", "#FFF8F0"]} />
      <Testimonials />
      <Gradient colorArray={["#FFF8F0", "#fff"]} />
      {/* Canvas in there most probably isnt configured for touch, might have to see what's happening */}
      <Contact />
    </main>
  );
}
