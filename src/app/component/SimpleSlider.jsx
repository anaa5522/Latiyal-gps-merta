"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SimpleSlider() {
  return (
    <div
      className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover px-4"
      style={{
        backgroundImage: "url('/IMAGE 2.jpg.jpeg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/0"></div>

      {/* Animated Background Blobs */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FCB13B]/20 rounded-full blur-3xl top-[-80px] md:top-[-100px] left-[-80px] md:left-[-100px] animate-pulse"></div>

      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-300/20 rounded-full blur-3xl bottom-[-80px] md:bottom-[-100px] right-[-80px] md:right-[-100px] animate-pulse"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl py-25">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Smart GPS Tracking <br />
          <span className="text-[#FCB13B]">For a Smarter World</span>
        </h1>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-white/90">
          Real-time tracking, security & insights to keep your vehicles safe and connected.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 w-full">
        <Link href={'/product'}>
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

            <span className="relative z-10">Buy Now</span>
          </motion.button>
            </Link>
            <Link href={'/contact'}>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-black font-semibold overflow-hidden group text-sm sm:text-base border border-white/30"
          >
            <span className="absolute inset-0 bg-transparent group-hover:bg-[#FBB247]"></span>

            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[200%] transition-all duration-700"></span>
            </span>

            <span className="relative z-10">Free Demo</span>
          </motion.button>
            </Link>
        </div>

      </div>
    </div>
  );
}