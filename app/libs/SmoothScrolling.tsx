// @ts-nocheck
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useState, useEffect } from "react";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth <= 768;
    setIsMobile(checkIsMobile());

    window.addEventListener("resize", () => setIsMobile(checkIsMobile()));

    return () => {
      window.removeEventListener("resize", () => setIsMobile(checkIsMobile()));
    };
  }, []);
  return !isMobile ? (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        smoothTouch: false,
        duration: 2.5,
        // lerp: 0.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        // inertia: 0.99,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  ) : (
    <>{children}</>
  );
};

export default SmoothScrolling;
