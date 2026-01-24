"use client";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      className="mt-17
        relative w-full
        h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]
        bg-[url('/IMG_20260113_130526.jpg')]
        bg-cover bg-top sm:bg-center
      "
    >
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 sm:h-40 bg-gradient-to-t from-[#F6F2EA] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center">
        <div
          className={`
            max-w-xl
            transition-all duration-700 ease-out
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
        >
          {/* Heading */}
          <h1 className="font-inter font-semibold text-black leading-tight
            text-[28px] sm:text-4xl md:text-6xl
          ">
            <span className="text-[#FCB13B]">T</span>RACK <br />
            SMARTER.
            <span className="block mt-2 sm:mt-4">DRIVE SAFER.</span>
          </h1>

          {/* Sub Heading */}
          <p className="
            font-montserrat font-light
            text-[13.3px] sm:text-sm md:text-base
            leading-[21.3px]
            text-gray-800
            mt-4 mb-6 sm:mb-8
          ">
            Advanced GPS Solution for Real-Time Vehicle Tracking
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-nowrap">
            {/* Contact */}
            <button
              className="
                font-montserrat font-semibold
                text-[13.3px] leading-[21.3px]
                px-6 py-3 rounded-full
                bg-[#FCB13B] text-black
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-[1.03]
                hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)]
                active:scale-95
              "
            >
              Contact Us
            </button>

            {/* Learn More */}
            <button
              className="
                font-montserrat font-semibold
                text-[13.3px] leading-[21.3px]
                px-6 py-3 rounded-full
                border border-black text-black
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-[1.03]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                active:scale-95
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
