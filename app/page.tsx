"use client";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setloading] = useState(true);
  return (
    <main className=" box-border text-black overflow-x-hidden">
      <div>{loading && <Loading setloading={setloading} />}</div>
      <Hero />
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
    </main>
  );
}
