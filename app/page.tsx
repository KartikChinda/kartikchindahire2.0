"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading";
import AboutMe from "./components/AboutMe";

export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // Disable scrolling when loading
    document.body.classList.add("overflow-hidden");
    if (loading === false) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loading]); // Run once on mount

  return (
    <main className=" box-border text-black overflow-x-hidden">
      <div>{loading && <Loading setloading={setloading} />}</div>
      <Hero />
      <AboutMe />
      {/* <div className="h-[100vh]"></div> */}
    </main>
  );
}
