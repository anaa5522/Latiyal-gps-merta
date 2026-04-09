"use client";

import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Banner() {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set(((x - midX) / midX) * 10);
    rotateX.set(-((y - midY) / midY) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">

      <div className="flex items-center justify-between gap-10  max-w-7xl w-full">

        {/* LEFT SIDE */}
        <div className="w-2/3 ">
          <h1 className="text-3xl md:text-6xl font-bold mb-10">
            Smart GPS Tracker
          </h1>

          <p className="text-gray-400 mb-6">
            Track your vehicle in real-time with advanced GPS technology.
            Get alerts, monitor routes, and ensure complete safety.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition">
            Buy Now
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/3 flex justify-center">
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="w-64 h-64 md:w-150 md:h-170 flex items-center justify-center"
            >
              <img
                src="/imgi_676_white-smartphone-mockup-blank-screen-isolated-on-transparent-background-smartphone-mockup-frame-free-png.png"
                alt="product"
                className="w-48 md:w-60 object-contain pointer-events-none"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}