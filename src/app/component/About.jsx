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

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <div className="bg-[#F6F2EA] overflow-hidden">

      {/* ================= HERO SECTION =================  */}
      <motion.div
        className="relative h-[520px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/df95db051ac7c4228bcbaecdc24deb9b.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md text-white text-sm tracking-widest"
          >
            PREMIUM COLLECTION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-[#FCB13A]"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg md:text-xl"
          >
            Premium furniture crafted for comfort, elegance and modern lifestyle.
          </motion.p>

        </div>
      </motion.div>

      {/* ================= WHO WE ARE ================= */}
      <section className="w-full bg-[#F6F2EA] py-16 md:py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#1e1e1e]"
          >

            <h2 className=" inter text-3xl md:text-5xl font-bold text-black mb-8">
              Who We Are
            </h2>

            <ul className="space-y-5 text-sm sm:text-[15px] leading-7 sm:leading-8 text-gray-700">

              <li>
                <span className="font-bold text-black">
                  Welcome to Latiyal Gps vehicle tracking system Pvt. Ltd.
                </span>
                , a pioneering force in vehicle tracking and monitoring systems.
                Based in the vibrant city of Jaipur, Rajasthan, we have been
                steadfastly serving our clients since our inception in 2019.
              </li>

              <li>
                At Latiyal Gps vehicle tracking system, we specialize in
                providing cutting-edge solutions for vehicle tracking and monitoring.
                With a focus on securing public vehicles such as trucks, buses,
                cars, and bikes, we empower our clients with the tools they need.
              </li>

              <li>
                <span className="font-bold text-black">
                  Our Journey
                </span>{" "}
                began with a vision to revolutionize the way vehicles are tracked
                and monitored, ensuring safety, efficiency, and peace of mind
                for our clients.
              </li>

              <li>
                <span className="font-bold text-black">
                  Our Mission
                </span>{" "}
                is clear: to deliver innovative, reliable, and cost-effective
                solutions that exceed our clients' expectations.
              </li>

              <li>
                <span className="font-bold text-black">
                  Our Achievements
                </span>{" "}
                With a proud track record of over 300+ satisfied customers
                and projects completed, we have earned a reputation for
                excellence in the industry.
              </li>

            </ul>

            <h3 className=" inter mt-8 text-2xl font-bold text-black">
              Why Choose Us?
            </h3>

            {/* SMALL BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

              <div className="bg-white border border-[#FCB13B]/20 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaShieldAlt className="text-[#FCB13B] text-xl" />

                  <h4 className="font-semibold text-black">
                    Secure Tracking
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  Advanced GPS systems with real-time monitoring and safety alerts.
                </p>
              </div>

              <div className="bg-white border border-[#FCB13B]/20 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaUsers className="text-[#FCB13B] text-xl" />

                  <h4 className="font-semibold text-black">
                    Trusted Support
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  Dedicated customer support team always ready to assist you.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              <img
                src="/about-us-vertical-600x1200.jpg"
                alt="team"
                className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-md rounded-[30px] object-cover shadow-2xl border-4 border-white"
              />


            </div>

          </motion.div>

        </div>
      </section>
      {/* ================= HOW GPS WORKS ================= */}
      <section className="bg-[#F6F2EA] py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" inter text-3xl md:text-4xl font-bold text-black mb-14"
          >
            How GPS Tracking Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-[#FCB13B]/10"
            >
              <FaSatelliteDish className="text-5xl text-[#FCB13B] mx-auto mb-5" />

              <h3 className="text-xl font-semibold text-black mb-3">
                Satellite Connection
              </h3>

              <p className="text-gray-600 leading-7">
                GPS devices connect with satellites to identify
                accurate vehicle location.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-[#FCB13B]/10"
            >
              <FaMapMarkedAlt className="text-5xl text-[#FCB13B] mx-auto mb-5" />

              <h3 className="text-xl font-semibold text-black mb-3">
                Live Tracking
              </h3>

              <p className="text-gray-600 leading-7">
                Real-time vehicle data is displayed instantly
                on maps and dashboards.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-[#FCB13B]/10"
            >
              <FaMobileAlt className="text-5xl text-[#FCB13B] mx-auto mb-5" />

              <h3 className="text-xl font-semibold text-black mb-3">
                Mobile Monitoring
              </h3>

              <p className="text-gray-600 leading-7">
                Track and manage your vehicles anytime from
                your mobile phone.
              </p>
            </motion.div>

          </div>
        </div>
      </section>






      {/* EXTRA COMPONENTS */}
      <History />
      <Chooserespon />

    </div>



  );
}