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
            text-3xl md:text-6xl
          ">
            <span className="text-[#FCB13B">T</span>RACK <br />
            SMARTER.
            <span className="block mt-2 sm:mt-4">DRIVE SAFER.</span>
          </h1>

          {/* Sub heading */}
          <h2 className="
            font-montserrat text-gray-800 mt-4 mb-6 sm:mt-3 lg:mt-8 lg:mb-15
            text-[13px] sm:text-sm md:text-base
          ">
            Advanced GPS Solution for Real-Time Vehicle Tracking
          </h2>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 flex gap-3 flex-nowrap overflow-x-auto sm:overflow-visible">
  
  {/* CONTACT US */}
  <button className="
    group relative overflow-hidden
    px-4 sm:px-7 py-2.5 sm:py-3
    rounded-xl
    border border-[#FCB13B]
    bg-[#FCB13B]
    font-semibold tracking-wide
    text-black whitespace-nowrap

    transition-all duration-300 ease-out

    hover:text-black
    hover:-translate-y-1
    hover:scale-[1.03]
    hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)]

    active:bg-[#FCB13B]
    active:text-black
    active:shadow-[0_8px_18px_rgba(252,177,59,0.35)]
    active:scale-[0.96]
  ">

    {/* SLIDING BRAND GRADIENT */}
    <span className="
      absolute inset-0
      bg-gradient-to-r from-[#FCB13B] to-[#FF9F1C]
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-700 ease-out
    " />

    {/* CONTENT */}
    <span className="relative z-10 flex items-center gap-2">
      Contact Us
      <span className="
        transition-transform duration-300
        group-hover:translate-x-1
      ">
        ➜
      </span>
    </span>
  </button>

  {/* LEARN MORE */}
  <button className="
    group relative overflow-hidden
    px-4 sm:px-7 py-2.5 sm:py-3
    rounded-xl
    border border-[#FCB13B]
    bg-[#FCB13B]
    font-semibold tracking-wide
    text-black whitespace-nowrap

    transition-all duration-300 ease-out

    hover:text-black
    hover:-translate-y-1
    hover:scale-[1.03]
    hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)]

    active:bg-[#FCB13B]
    active:text-black
    active:shadow-[0_8px_18px_rgba(252,177,59,0.35)]
    active:scale-[0.96]
  ">

    {/* SLIDING BRAND GRADIENT */}
    <span className="
      absolute inset-0
      bg-gradient-to-r from-[#FCB13B] to-[#FF9F1C]
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-700 ease-out
    " />

    {/* CONTENT */}
    <span className="relative z-10 flex items-center gap-2">
      Learn More
      <span className="
        transition-transform duration-300
        group-hover:translate-x-1
      ">
        ➜
      </span>
    </span>
  </button>

</div>


        </div>
      </div>
    </div>
  );
}
