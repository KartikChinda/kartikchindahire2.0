"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        easing: (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
