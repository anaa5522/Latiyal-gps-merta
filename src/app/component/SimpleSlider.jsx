"use client";

import React from "react";

export default function SimpleSlider() {
  return (
    <div
      className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover px-4"
      style={{
        backgroundImage: "url('/IMAGE 2.jpg.jpeg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

      {/* Animated Background Blobs */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FCB13B]/20 rounded-full blur-3xl top-[-80px] md:top-[-100px] left-[-80px] md:left-[-100px] animate-pulse"></div>

      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-300/20 rounded-full blur-3xl bottom-[-80px] md:bottom-[-100px] right-[-80px] md:right-[-100px] animate-pulse"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Smart GPS Tracking <br />
          <span className="text-[#FCB13B]">For a Smarter World</span>
        </h1>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-white/90">
          Real-time tracking, security & insights to keep your vehicles safe and connected.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          
          <button className="px-5 md:px-6 py-2.5 md:py-3 bg-[#FCB13B] text-black rounded-full text-sm md:text-lg font-semibold transition transform hover:scale-105 shadow-lg">
            Get Started
          </button>

          <button className="px-5 md:px-6 py-2.5 md:py-3 border border-white text-white rounded-full text-sm md:text-lg font-semibold transition hover:bg-black hover:text-white">
            Learn More
          </button>

        </div>

      </div>
    </div>
  );
}