"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.03,
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
