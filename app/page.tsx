"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading";
import AboutMe from "./components/About";
import WorkEx from "./components/WorkEx";
import Contact from "./components/Contact/Contact";

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
      <WorkEx />
      <Contact />
    </main>
  );
}
