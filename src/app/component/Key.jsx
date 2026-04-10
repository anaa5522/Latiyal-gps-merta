"use client";

import { motion } from "framer-motion";

export default function Key() {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const leftAnim = {
    initial: isMobile ? { opacity: 0, y: 80 } : { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };

  const rightAnim = {
    initial: isMobile ? { opacity: 0, y: 80 } : { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="w-full py-20 bg-[#F6F2EA] to-white overflow-hidden">

      <div className="max-w-6xl mx-auto space-y-20 px-4">

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={leftAnim.initial}
            whileInView={leftAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="w-full h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <img
              src="/Image 2jpg.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={rightAnim.initial}
            whileInView={rightAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="space-y-6 relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C19A6B]/10 blur-2xl rounded-full"></div>

            <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-[#C19A6B]/10 text-[#C19A6B] rounded-full font-semibold">
              Security Feature
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Smart Geo-Fencing <br />
              <span className="text-[#C19A6B]">That Thinks Ahead</span>
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C19A6B] to-transparent"></div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Define intelligent boundaries and let the system do the rest.
              The moment your assets cross a secure zone, you receive instant alerts —
              keeping you informed, protected, and always one step ahead.
            </p>
          </motion.div>

        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={leftAnim.initial}
            whileInView={leftAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 space-y-4"
          >
            <span className="text-sm uppercase tracking-widest text-[#C19A6B] font-semibold">
              Connectivity
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Seamless <span className="text-[#C19A6B]">Mobile Access</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Stay connected to your assets anytime, anywhere.
              With our intuitive mobile experience, tracking, monitoring,
              and managing your devices is always just a tap away.
            </p>

            <div className="w-16 h-1 bg-[#C19A6B] rounded-full"></div>
          </motion.div>

          <motion.div
            initial={rightAnim.initial}
            whileInView={rightAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 w-full h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <img
              src="/ca9ac4f03440f59c0cee63b773230325.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Block 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={leftAnim.initial}
            whileInView={leftAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="w-full h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <img
              src="/9afb30ced68ed715c8c3b7c08e0aec23.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={rightAnim.initial}
            whileInView={rightAnim.whileInView}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <span className="text-sm uppercase tracking-widest text-[#C19A6B] font-semibold">
              Live Monitoring
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Real-Time <span className="text-[#C19A6B]">GPS Tracking</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Experience precision tracking with live location updates.
              Monitor your vehicles in real-time with high accuracy,
              ensuring complete visibility, control, and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                Live Location
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                High Accuracy
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                24/7 Monitoring
              </span>
            </div>

            <div className="w-20 h-1 bg-[#C19A6B] rounded-full"></div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}