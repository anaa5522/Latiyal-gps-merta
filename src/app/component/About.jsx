"use client";

import { motion } from "framer-motion";
import {
  FaBinoculars,
  FaLightbulb,
  FaBullseye,
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";

/* ------------------ ANIMATIONS ------------------ */
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

/* ------------------ PAGE ------------------ */
export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[url('/4c9bc507bd6c4bda4cd5b60222c092c7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative text-center px-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-inter font-semibold text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-200 max-w-2xl mx-auto"
          >
            Smart GPS Tracking Solutions for Safer & Smarter Mobility
          </motion.p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.img
          src="/fcd3c92c1005803424a3b0b650097cf5.jpg"
          alt="About GPS"
          variants={fadeUp}
          className="rounded-3xl shadow-xl"
        />

        <motion.div variants={fadeUp}>
          <p className="text-[#FCB13B] font-semibold tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h2 className="font-inter font-semibold text-3xl md:text-4xl mb-5">
            We Deliver Smart GPS Solutions
          </h2>
          <p className="text-gray-600 mb-4">
            We provide advanced GPS tracking systems designed for individuals,
            fleet owners, logistics companies, and enterprises.
          </p>
          <p className="text-gray-600 mb-6">
            Our solutions improve vehicle security, reduce operational costs,
            and deliver complete real-time visibility.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FCB13B] text-black px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </motion.section>

      {/* OUR MISSION SECTION (DESIGN FROM IMAGE) */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div variants={fadeUp}>
            <h2 className="font-inter font-semibold text-3xl md:text-5xl mb-12">
              Our Mission
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#20c997] text-[#20c997] text-xl">
                  <FaBinoculars />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Vision</h4>
                  <p className="text-gray-600 max-w-md">
                    To create a connected and intelligent mobility ecosystem
                    powered by accurate GPS technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#20c997] text-[#20c997] text-xl">
                  <FaLightbulb />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Mission</h4>
                  <p className="text-gray-600 max-w-md">
                    Deliver real-time GPS tracking solutions that improve
                    vehicle safety, efficiency, and control.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#20c997] text-[#20c997] text-xl">
                  <FaBullseye />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Goals</h4>
                  <p className="text-gray-600 max-w-md">
                    Innovate continuously and provide reliable support to
                    become a trusted GPS partner.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 rotate-45">
              {["/mission1.jpg", "/mission2.jpg", "/mission3.jpg", "/mission4.jpg"].map(
                (img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-3xl ${i === 3 ? "col-span-2 h-72" : "h-44 w-44"
                      }`}
                  >
                    <img
                      src={img}
                      alt="mission"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl md:text-4xl">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Real-Time Tracking", <FaMapMarkedAlt />],
            ["High Accuracy GPS", <FaSatelliteDish />],
            ["Mobile App Access", <FaMobileAlt />],
            ["Vehicle Security", <FaShieldAlt />],
            ["24/7 Monitoring", <FaClock />],
            ["Trusted by Thousands", <FaUsers />],
          ].map(([title, icon], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl text-center"
            >
              <div className="text-[#FCB13B] text-4xl mb-4 flex justify-center">
                {icon}
              </div>
              <h4 className="font-semibold text-xl">{title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
