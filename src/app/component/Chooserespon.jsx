"use client";

import { motion } from "framer-motion";
import { MdGpsFixed } from "react-icons/md";
import { FaSatelliteDish, FaMobileAlt } from "react-icons/fa";
import { FiCloud, FiBell, FiShield } from "react-icons/fi";

export default function Chooserespon() {
  return (
    <section className="bg-[#F6F2EA] py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}   // 👈 changed
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#FCB13B] uppercase tracking-widest font-semibold mb-2">
            About Technology
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Advanced GPS Technology That Powers Your Fleet
          </h2>

          <p className="text-gray-600 mt-5 text-sm leading-relaxed">
            Our GPS tracking system uses a network of satellites to pinpoint
            the exact location of your vehicles in real time. Data is instantly
            transmitted to secure cloud servers, allowing you to monitor,
            analyze, and optimize operations through an intuitive dashboard.
            Experience unmatched accuracy, speed, and reliability.
          </p>

          <div className="mt-6 inline-block bg-[#FCB13B]/10 text-[#FCB13B] px-5 py-2 rounded-full text-sm font-medium">
            Powered by latest IoT & GPS innovations
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}   // 👈 changed
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[350px] bg-white rounded-3xl shadow-md flex items-center justify-center overflow-hidden"
        >
          <img
            src="/9323fc916cc4ee7b2e8c1f87f41f10e9.jpg"
            alt="GPS Tracking"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}