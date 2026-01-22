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
        h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]
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
          <div className="mt-4 sm:mt-6 flex gap-3 flex-nowrap overflow-x-auto sm:overflow-visible pb-5 ">
  
  {/* CONTACT US */}
  <button className="bg-yellow-500  text-white px-6 py-3 rounded-full font-semibold transition  hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)] transition-all duration-500 bg-[#FCB13B] text-black font-semibold
  
  transition-all duration-150 ease-out
  active:scale-80
  active:translate-y-[1px]
   active:shadow-[0_18px_40px_rgba(252,177,59,0.45)] ">
            Contact Us
          </button>

  {/* LEARN MORE */}
   <button className="bg-yellow-500  text-white px-6 py-3 rounded-full font-semibold transition  hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)] transition-all duration-500 transition-all duration-150 ease-out
  active:scale-80
  active:translate-y-[1px]
   active:shadow-[0_18px_40px_rgba(252,177,59,0.45)]">
            Learn More
          </button>

</div>


        </div>
      </div>
    </div>
  );
}
