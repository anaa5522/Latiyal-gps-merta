"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="relative min-h-[100vh] md:h-screen flex items-center justify-start overflow-hidden px-4 md:px-16">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-contain"
      >
        <source src="/vecteezy_car-and-truck-traffic-on-the-highway-in-europe-poland_7957364.mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

   
{/* HERO CONTENT */}
<div className="relative z-10 flex items-start md:items-center min-h-screen w-full">

  <div className="w-full max-w-3xl mx-auto md:mx-0 text-center md:text-left pt-28 md:pt-0">

    <h1 className="inter select-none text-3xl mt-4 sm:text-4xl md:text-6xl font-bold text-white leading-tight">
      "Smart Fleet Tracking "
      <br />

      <span className="text-[#FCB13B] ">
       for a Smarter Future
      </span>
    </h1>

    <p className=" select-none mt-8 md:mt-6 text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto md:mx-0">
      Real-time tracking, security & insights to keep your
      vehicles safe and connected.
    </p>

   {/* BUTTONS */}
<div className="mt-15 flex flex-col sm:flex-row gap-4 w-full  max-w-md mx-auto md:mx-0">

  {/* BUY NOW */}
  <Link href="/product" className="w-full sm:w-auto flex-1">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      className="relative w-full py-3 px-8 rounded-full text-black font-semibold overflow-hidden group"
    >
      <span className="absolute inset-0 bg-[#FBB247]"></span>

      <span className="relative z-10">
        Buy Now
      </span>
    </motion.button>
  </Link>

  {/* FREE DEMO */}
  <Link href="/contact" className="w-full sm:w-auto flex-1">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      className="relative w-full py-3 px-8 rounded-full text-white font-semibold overflow-hidden group border border-white/30"
    >
      <span className="absolute inset-0 bg-transparent group-hover:bg-[#FBB247] transition-all duration-500"></span>

      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        Free Demo
      </span>
    </motion.button>
  </Link>

</div>

  </div>

</div>
    </div>
  );
}