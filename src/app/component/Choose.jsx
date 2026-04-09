"use client";

import { motion } from "framer-motion";
import { FaSatelliteDish, FaMobileAlt } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { FiShield, FiCloud } from "react-icons/fi";

export default function Choose() {
  const features = [
    { icon: <MdGpsFixed />, title: "Real-Time Tracking" },
    { icon: <FaSatelliteDish />, title: "High Accuracy" },
    { icon: <FaMobileAlt />, title: "Mobile Access" },
    { icon: <FiShield />, title: "Data Security" },
    { icon: <FiCloud />, title: "Cloud Sync" },
    { icon: <FaSatelliteDish />, title: "24/7 Support" },
  ];

  return (
    <section
      className="relative py-24 bg-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/4bb655fe323dd0e657b40b10ad74b47e.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#FCB13B] font-semibold tracking-widest uppercase mb-2">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Trusted GPS Solutions
          </h2>

          <p className="text-white mt-4 max-w-xl mx-auto text-sm opacity-80">
            Reliable, secure and powerful tracking system designed for modern businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCB13B]/60 via-transparent to-[#FCB13B]/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20">
                
                {/* Icon */}
                <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-[#FCB13B]/10 text-[#FCB13B] text-2xl mb-4 transition-all duration-500 group-hover:scale-110">
                  
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl bg-[#FCB13B]/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  
                  {item.icon}
                </div>

                {/* Title */}
                <p className="text-sm text-white font-medium tracking-wide group-hover:text-[#FCB13B] transition duration-300">
                  {item.title}
                </p>

                {/* Bottom Line */}
                <div className="mt-3 w-8 h-[2px] bg-[#FCB13B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}