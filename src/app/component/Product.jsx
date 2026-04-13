"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const contentAnim = {
    initial: isMobile ? { opacity: 0, y: 80 } : { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section className="w-full bg-[#E6CEA1] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT IMAGES */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <img
            src="/DSC03415-600x600.jpg"
            alt="gps device"
            className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover rounded-lg"
          />
          <img
            src="/DSC03450-600x600.jpg"
            alt="gps tracking"
            className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover rounded-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={contentAnim.initial}
          whileInView={contentAnim.whileInView}
          transition={{ duration: 0.5 }}
          className="text-white text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-3 md:mb-4">
            Smart GPS Tracking <br /> You Can Rely On
          </h2>

          <div className="w-10 md:w-12 h-[2px] bg-[#FCB13B] mb-4 md:mb-6 mx-auto md:mx-0"></div>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 md:mb-6 max-w-md mx-auto md:mx-0">
            Our advanced GPS tracking system provides real-time location updates,
            geo-fencing alerts, and complete vehicle monitoring. Designed for
            businesses and individuals, it ensures safety, efficiency, and total
            control over your assets anytime, anywhere.
          </p>

          <ul className="text-white/80 text-xs sm:text-sm space-y-1.5 md:space-y-2 mb-5 md:mb-6">
            <li>✔ Real-time tracking</li>
            <li>✔ Geo-fencing alerts</li>
            <li>✔ Driver behavior monitoring</li>
            <li>✔ Fuel tracking system</li>
          </ul>

          <div className="flex justify-center md:justify-start">
            <Link href="/product">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 md:px-6 py-2 text-xs sm:text-sm tracking-wide rounded-full overflow-hidden group border border-[#FCB13B] text-[#FCB13B] font-semibold"
              >
                <span className="absolute inset-0 bg-transparent group-hover:bg-[#FCB13B] transition duration-300"></span>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[200%] transition-all duration-700"></span>
                </span>

                <span className="relative z-10 group-hover:text-black transition">
                  Explore Now →
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}