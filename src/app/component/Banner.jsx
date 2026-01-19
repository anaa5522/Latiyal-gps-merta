"use client";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className="
        w-full relative
        h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]
        bg-[url('/IMG_20260113_130526.jpg')]
        bg-cover bg-top sm:bg-center
      "
    >
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 sm:h-40 bg-gradient-to-t from-[#F6F2EA] to-transparent pointer-events-none" />

      <div className="container mx-auto h-full flex items-center px-4 sm:px-6">
        <div
          className={`
            max-w-xl lg:max-w-2xl
            text-left
            transform transition-all duration-700 ease-out
            ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          `}
        >
          {/* Heading */}
          <h1 className="
            font-inter font-semibold text-black leading-tight
            text-xl sm:text-xl md:text-4xl xl:text-5xl 2xl:text-6xl
          ">
            TRACK SMARTER.
            <span className="block mt-2 sm:mt-4">DRIVE SAFER.</span>
          </h1>

          {/* Sub heading */}
          <h2 className="
            font-montserrat text-gray-800 mt-4 mb-6 sm:mt-3 lg:mt-8 lg:mb-15
            text-[8px] sm:text-sm md:text-base
          ">
            Advanced GPS Solution for Real-Time Vehicle Tracking
          </h2>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 flex gap-3 flex-wrap">
            <button className="
              px-4 sm:px-6 py-2 sm:py-2
              text-xs sm:text-sm md:text-base
              font-montserrat bg-yellow-500 text-black
              rounded-lg
            ">
              Get Started
            </button>

            <button className="
              px-4 sm:px-8 py-2 sm:py-3
              text-xs sm:text-sm md:text-base
              font-montserrat text-black
              border border-black rounded-lg
            ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
