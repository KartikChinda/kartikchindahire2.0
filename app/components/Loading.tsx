import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Loading = ({ setloading }: { setloading: (val: boolean) => void }) => {
  const [loaderNumber, setloaderNumber] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

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
      }, 1200);
  }, [loaderNumber, setloading]);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(overlayRef.current, {
        duration: 3,
        ease: "power4.inOut",
        clipPath: "circle(0%)",
      });
    }, 800);
  }, [isLoaded]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white text-[100px] xl:text-[250px] font-black italic font-hero-heading"
      ref={overlayRef}
      style={{ clipPath: "circle(100%)" }}
    >
      {loaderNumber > 100 ? 100 : loaderNumber}
    </div>
  );
};

export default Loading;
