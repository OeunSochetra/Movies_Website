"use client";
import { images } from "../constant/Banner";
import { useState, useEffect } from "react";

const SlideBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-x-auton">
      <div className="flex flex-nowrap">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
    // <div className="pt-10 flex items-center justify-center ">
    //   <img
    //     className="max-w-[350px] md:max-w-[1000px] opacity-25 rounded-lg"
    //     src={images[currentSilde]}
    //     alt={`Slide ${currentSilde + 1}`}
    //   />
    // </div>
  );
};

export default SlideBanner;
