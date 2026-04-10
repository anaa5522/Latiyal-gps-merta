"use client";

import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";
import History from "./Histroy";
import Chooserespon from "./Chooserespon";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <div className="bg-[#F6F2EA] text-white overflow-hidden">

      {/* ================= HERO ================= */}
       <div
        className="text-center my-0 relative bg-cover bg-center bg-no-repeat py-20 md:py-40 px-4"
        style={{
          backgroundImage:
            "url('/df95db051ac7c4228bcbaecdc24deb9b.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#FCB13B]"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-white/80 text-base md:text-xl max-w-2xl mx-auto"
          >
            We are always ready to help you with GPS tracking solutions, support
            and business inquiries.
          </motion.p>
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.img
          src="/fcd3c92c1005803424a3b0b650097cf5.jpg"
          variants={fadeUp}
          className="rounded-3xl shadow-xl"
        />

        <motion.div variants={fadeUp}>
          <p className="text-[#FCB13B] font-semibold uppercase mb-2">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl text-black font-semibold mb-5">
            We Deliver Smart GPS Solutions
          </h2>

          <p className="text-black mb-4">
            We provide advanced GPS tracking systems for individuals, fleets,
            and enterprises.
          </p>

          <p className="text-black mb-6">
            Our technology ensures real-time tracking, better security, and
            improved efficiency.
          </p>

          <button className="bg-[#FCB13B] text-black px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_#FCB13B] transition">
            Request a Demo
          </button>
        </motion.div>
      </motion.section>

      {/* ================= HOW GPS WORKS ================= */}
      <section className="bg-[#F6F2EA]  py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">
            How GPS Tracking Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="group hover:scale-105 transition duration-300">
              <FaSatelliteDish className="text-4xl text-[#FCB13B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-black">Satellite Connection</h3>
              <p className="text-black">
                GPS devices connect with satellites to determine location.
              </p>
            </div>

            <div className="group hover:scale-105 transition duration-300">
              <FaMapMarkedAlt className="text-4xl text-[#FCB13B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-black">Location Tracking</h3>
              <p className="text-black">
                Real-time data is sent to the system and displayed on maps.
              </p>
            </div>

            <div className="group hover:scale-105 transition duration-300">
              <FaMobileAlt className="text-4xl text-[#FCB13B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-black">Mobile Access</h3>
              <p className="text-black">
                Monitor everything from your phone anytime, anywhere.
              </p>
            </div>

          </div>
        </div>
      </section> 
      <History />
      <Chooserespon />

    </div>
  );
}