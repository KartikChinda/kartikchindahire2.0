"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading";
import AboutMe from "./components/About";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials";
import Gradient from "./components/Gradients";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery";
import WorkExIntro from "./components/WorkEx/WorkExIntro";
import WorkExNew from "./components/WorkEx/WorkExNew";

export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    if (loading === false) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loading]);

  return (
    <main className=" box-border text-black ">
      {/* <div>{loading && <Loading setloading={setloading} />}</div> */}
      <Hero />
      <AboutMe />
      <WorkExIntro />
      <WorkExNew />
      <div className="hidden md:block">
        <Gallery />
      </div>
      <Projects />
      <Skills />
      {/* <Gradient colorArray={["#FCFAF6", "#FFF8F0"]} /> */}
      <Testimonials />
      <Gradient colorArray={["#FFF8F0", "#fff"]} />
      <Contact />
    </main>
  );
}
