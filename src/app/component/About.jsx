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
import Chooserespon from "./Technology";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <div className="bg-[#F6F2EA] overflow-hidden select-none   ">

      {/* ================= HERO SECTION =================  */}
      <motion.div
        className="relative h-[400px] sm:h-[600px] md:h-[600px] lg:h-[490px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Background Image */}
        <img
          src="/ChatGPT Image Jun 27, 2026, 12_00_23 PM.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 flex justify-center">
          <div className="text-center max-w-4xl">

            {/* Heading */}
            <motion.h1
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl font-extrabold text-white tracking-wide"
            >
              <span className="text-[#FCB13B]">A</span>bout us
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="h-1 bg-[#FCB13B] mx-auto rounded-full mt-4"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}
              className="mt-6 text-sm sm:text-base md:text-base lg:text-md text-gray-400 leading-8 max-w-2xl mx-auto"
            >
              Smart GPS Tracking Solutions for Cars, Trucks, Buses & Fleet Management.
              Monitor your vehicles anytime, anywhere with real-time tracking and
              advanced security features.
            </motion.p>

          </div>
        </div>

      </motion.div>

      {/* ===================== WHO WE ARE SECTION ===================== */}
      <section className="w-full bg-[#F6F2EA] pt-16 md:pt-24 px-4 sm:px-6 lg:px-t6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#1e1e1e]"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#FCB13B]/10 text-[#FCB13B] font-semibold text-sm tracking-wide mb-5">
              ABOUT OUR COMPANY
            </span>

            <h2 className="inter text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
              Who <span className="text-[#FCB13B]">We Are</span>
            </h2>

            <ul className="space-y-5 text-[15px] leading-8 text-gray-700">

              <li>
                <span className="font-bold text-[#FCB13B]">
                  Welcome to Latiyal GPS Vehicle Tracking System Pvt. Ltd.
                </span>{" "}
                — a pioneering force in vehicle tracking and monitoring systems.
                Based in Jaipur, Rajasthan, we have proudly served our customers
                since 2019 with advanced GPS technology.
              </li>

              <li>
                We specialize in providing cutting-edge GPS tracking and fleet
                management solutions for trucks, buses, cars, bikes, and commercial
                vehicles, ensuring maximum security and operational efficiency.
              </li>

              <li>
                <span className="font-bold text-[#FCB13B]">
                  Our Journey
                </span>{" "}
                started with a vision to transform vehicle security through
                intelligent GPS technology, delivering peace of mind to every client.
              </li>

              <li>
                <span className="font-bold text-[#FCB13B]">
                  Our Mission
                </span>{" "}
                is to provide innovative, reliable, and affordable vehicle tracking
                solutions backed by exceptional customer support.
              </li>

              <li>
                <span className="font-bold text-[#FCB13B]">
                  Our Achievements
                </span>{" "}
                include 300+ satisfied customers and numerous successful GPS
                installations across India.
              </li>

            </ul>

            <h3 className="inter mt-10 text-2xl font-bold text-[#FCB13B]">
              Why Choose Us?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">

              {/* Card 1 */}
              <div
                className="relative overflow-hidden rounded-3xl h-[340px] sm:h-[380px] lg:h-[420px] group "
              >

                {/* Background Image */}
                <img
                  src="/0fa3b14e079c55fca911bedc17f46e45.jpg"
                  alt="Secure Tracking"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8">

                  {/* Top */}
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FCB13B] flex items-center justify-center shadow-lg mb-5">
                      <FaShieldAlt className="text-white text-2xl" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Secure Tracking
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-gray-200 text-sm sm:text-base leading-7 max-w-sm">
                      Real-time GPS tracking with instant alerts, route history and
                      advanced vehicle security features for complete peace of mind.
                    </p>

                    <Link href={"/servicepage"}  className="mt-6 flex items-center gap-2 text-[#FCB13B] font-semibold group/button">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/button:translate-x-2">
                        →
                      </span>
                    </Link>
                  </div>

                </div>

              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-3xl h-[340px] sm:h-[380px] lg:h-[420px] group ">

                {/* Background Image */}
                <img
                  src="/205ef5e27daa2642ff80d059fc4df267.jpg"
                  alt="Trusted Support"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8">

                  {/* Top */}
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FCB13B] flex items-center justify-center shadow-lg mb-5">
                      <FaUsers className="text-white text-2xl" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Trusted Support
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-gray-200 text-sm sm:text-base leading-7 max-w-sm">
                      Our dedicated support team is available to provide quick assistance,
                      expert guidance, and reliable solutions whenever you need help.
                    </p>

                    <Link href={"/servicepage"}  className="mt-6 flex items-center gap-2 text-[#FCB13B] font-semibold group/button">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/button:translate-x-2">
                        →
                      </span>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Background Glow */}
              <div className="absolute -inset-5 bg-gradient-to-br from-[#FCB13B]/20 to-orange-200/10 rounded-[40px] blur-3xl"></div>

              {/* Main Card */}
              <div className="relative bg-white p-4 rounded-[35px] shadow-[0_30px_70px_rgba(0,0,0,0.15)]">

                <img
                  src="/f8c44145967100afc68cb567847ff271.jpg"
                  alt="Latiyal GPS Team"
                  className="
            w-full
            max-w-[370px]
            sm:max-w-[450px]
            md:max-w-[520px]
            lg:max-w-[560px]
            xl:max-w-[620px]
            rounded-[30px]
            object-cover
            transition-all
            duration-500
            hover:scale-105"
                />

                {/* Experience Card */}
                <div className="absolute bottom-6 left-6   px-5 py-4   ">

                  <h3 className="text-3xl font-bold  text-[#FCB13B]">
                    7+
                  </h3>

                  <p className="text-sm text-gray-600">
                    Years Experience
                  </p>

                </div>

                {/* Happy Clients */}
                <div className="absolute top-6 right-6 bg-[#FCB13B] text-white rounded-2xl px-5 py-4 shadow-xl">

                  <h3 className="text-2xl font-bold">
                    300+
                  </h3>

                  <p className="text-sm">
                    Happy Clients
                  </p>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>
      {/* ================= HOW GPS WORKS ================= */}
      {/*  */}






      {/* EXTRA COMPONENTS */}
      <History />
      <Chooserespon />

    </div>



  );
}