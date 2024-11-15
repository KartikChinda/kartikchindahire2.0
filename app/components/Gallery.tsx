import React, { useEffect, useRef, useState } from "react";
import { images } from "../assets";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaded) {
      imageRefs.current.forEach((img) => {
        if (img) {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              transform: "rotate3d(-2, 0, 0, 45deg)",
            },
            {
              opacity: 1,
              duration: 0.4,
              transform: "rotate3d(0, 0, 0, 0)",
              scrollTrigger: {
                trigger: img,
                start: "top 100%",
                end: "top 20%",
                toggleActions: "play none play none none",
                scrub: 0.2,
              },
            }
          );
        }
      });
    }
  }, [isLoaded]);

  const handleImageLoad = (el: HTMLImageElement | null, index: number) => {
    if (el) {
      imageRefs.current[index] = el;
    }
  };

  const handleAllImagesLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="py-20 p-[32px] columns-[300px] lg:columns-[400px] bg-gradient-to-b from-black to-lightPeachbg">
      {images.map((imageSrc, index) => (
        <Image
          onLoadingComplete={(el) => {
            handleImageLoad(el, index);
            // loading complete if it is the last image
            if (index === images.length - 1) {
              handleAllImagesLoaded();
            }
          }}
          src={imageSrc}
          alt={`Image ${index + 1}`}
          className="w-[100%] mb-[1rem] border-2 shadow-2xl border-black rounded-xl"
          style={{ transformStyle: "preserve-3d" }}
        />
      ))}
    </div>
  );
};

export default Gallery;
