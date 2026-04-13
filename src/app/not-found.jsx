"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function notfound() {
  return (
    <div className="h-[80dvh] flex flex-col items-center justify-center bg-[#F6F2EA] text-center px-4">

      {/* Big 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl font-bold text-[#FCB13B]"
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl md:text-4xl font-semibold text-black"
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-600 max-w-md"
      >
        Oops! The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Link href="/">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-full text-black font-semibold overflow-hidden group"
          >
            {/* Background */}
            <span className="absolute inset-0 bg-[#FCB13B]"></span>

            {/* Shine Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[200%] transition-all duration-700"></span>
            </span>

            <span className="relative z-10">Go Home</span>
          </motion.button>
        </Link>
      </motion.div>

    </div>
  );
}