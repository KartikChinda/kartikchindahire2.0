import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ClockLoader } from "react-spinners";

const Loading = ({ setloading }: { setloading: (val: boolean) => void }) => {
  const [loaderNumber, setloaderNumber] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const colors = [
    // "#D2FF72",
    // "#00FF9C",
    // "#FFFF80",
    // "#F72798",
    // "#31E1F7",
    // "#FF0000",
    "#fff",
  ];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 200);
    return () => clearInterval(colorInterval);
  }, [colors.length]);

  const helpLoaderFunction = () => {
    if (loaderNumber >= 100) {
      setloaderNumber(100);
      clearTimeout(loaderNumberTimeout);
      return;
    }
    setloaderNumber((prev) => (prev += Math.floor(Math.random() * 10) + 1));
  };
  let delay = Math.floor(Math.random() * 1000) + 50;
  const loaderNumberTimeout = setTimeout(() => {
    helpLoaderFunction();
  }, delay);

  useEffect(() => {
    loaderNumber === 100 &&
      setTimeout(() => {
        setisLoaded(true);
        setloading(false);
      }, 2000);
  }, [loaderNumber, setloading]);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(overlayRef.current, {
        duration: 3,
        ease: "power4.inOut",
        clipPath: "circle(0%)",
      });
    }, 1000);
  }, [isLoaded]);

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white text-xl font-black italic font-hero-heading gap-8"
      ref={overlayRef}
      style={{ clipPath: "circle(100%)" }}
    >
      <ClockLoader color={colors[colorIndex]} size={150} />
      {/* {loaderNumber > 100 ? 100 : loaderNumber} */}
    </div>
  );
};

export default Loading;
