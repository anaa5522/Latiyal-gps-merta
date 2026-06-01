"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="relative min-h-[80vh] md:h-screen flex items-center justify-start overflow-hidden px-4 md:px-16">

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

   

      {/* CONTENT */}
      <div className="relative text-left max-w-3xl w-full py-24 z-10">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Smart GPS Tracking <br />

          <span className="text-[#FCB13B]">
            For a Smarter World
          </span>

        </h1>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-white/90 max-w-2xl">
          Real-time tracking, security & insights to keep your
          vehicles safe and connected.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-start items-start gap-3 md:gap-4 w-full">

          {/* BUY NOW */}
          <Link href={"/product"}>

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-black font-semibold overflow-hidden group text-sm sm:text-base"
            >

              <span className="absolute inset-0 bg-[#FBB247]"></span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[200%] transition-all duration-700"></span>
              </span>

              <span className="relative z-10">
                Buy Now
              </span>

            </motion.button>

          </Link>

          {/* FREE DEMO */}
          <Link href={"/contact"}>

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-white font-semibold overflow-hidden group text-sm sm:text-base border border-white/30"
            >

              <span className="absolute inset-0 bg-transparent group-hover:bg-[#FBB247] transition-all duration-500"></span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[200%] transition-all duration-700"></span>
              </span>

              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Free Demo
              </span>

            </motion.button>

          </Link>

        </div>
      </div>
    </div>
  );
}