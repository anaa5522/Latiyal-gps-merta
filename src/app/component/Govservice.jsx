"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTruck,
  FaLandmark,
  FaCheckCircle,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

export default function Govservice() {
  return (
    <div className="bg-[#F6F2EA] overflow-hidden">

      {/* HERO */}
      {/* HERO */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
                AIS 140 VLTD
              </span>

              <h1 className=" inter text-5xl lg:text-6xl font-bold text-black mt-6 leading-tight">
                Stay Compliant.
                <span className="text-black"> Stay Ahead.</span>
              </h1>

              <p className="text-xl text-black mt-6">
                Government-certified Vehicle Location Tracking Devices (VLTD)
                installed and supported by experts.
              </p>

              <p className="text-black mt-6 leading-relaxed">
                Latiyal GPS is an authorised supplier and installer of AIS
                140-certified VLTD devices helping commercial vehicle owners
                maintain full compliance with Government regulations while
                ensuring smooth operations.
              </p>

              <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl font-semibold">
                Get Compliance Support
              </button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="/fleet_city_highway.png"
                alt="AIS 140 VLTD"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>


      <section className="py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >

            <div className="bg-black text-white rounded-xl py-4 px-4 font-semibold text-center whitespace-nowrap">
              ✓ Government Approved
            </div>

            <div className="bg-black text-white rounded-xl py-4 px-4 font-semibold text-center whitespace-nowrap">
              ✓ AIS 140 Certified
            </div>

            <div className="bg-black text-white rounded-xl py-4 px-4 font-semibold text-center whitespace-nowrap">
              ✓ Mining Compliance
            </div>

            <div className="bg-black text-white rounded-xl py-4 px-4 font-semibold text-center whitespace-nowrap">
              ✓ RTO Integration
            </div>

          </motion.div>

        </div>
      </section>



      {/* PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className=" inter text-3xl sm:text-4xl font-bold text-center text-[#0F172A] mb-10 lg:mb-16">
            Simple Compliance Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center">

            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <FaCheckCircle className="text-4xl text-[#FCB13A] mx-auto mb-4" />
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                Device Supply
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <FaTools className="text-4xl text-[#FCB13A] mx-auto mb-4" />
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                Installation
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <FaShieldAlt className="text-4xl text-[#FCB13A] mx-auto mb-4" />
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                Integration
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <FaCheckCircle className="text-4xl text-[#FCB13A] mx-auto mb-4" />
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                Approval
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition col-span-2 md:col-span-1">
              <FaHeadset className="text-4xl text-[#FCB13A] mx-auto mb-4" />
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                Support
              </h3>
            </div>

          </div>

        </div>
      </section>


      {/* MAIN SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FaShieldAlt className="text-6xl text-[#FCB13A] mx-auto mb-6" />

          <h2 className=" inter text-4xl font-bold text-[#0F172A]">
            Complete AIS 140 Compliance Solution
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We manage everything from certified device supply and professional
            installation to government portal integration, compliance
            documentation, and ongoing technical support.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {/* Mining */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

              <FaTruck className="text-4xl lg:text-5xl text-[#FCB13A] mb-5" />

              <span className="text-black font-semibold text-sm sm:text-base">
                Rajasthan Mining
              </span>

              <h3 className=" inter text-2xl sm:text-3xl font-bold text-[#0F172A] mt-3 leading-tight">
                Compliant Tracking for Every Mining Vehicle
              </h3>

              <p className="text-gray-600 mt-4 lg:mt-5 text-sm sm:text-base leading-relaxed">
                End-to-end AIS 140 compliance solutions tailored for Rajasthan
                mining operations and mineral transport vehicles.
              </p>

              <ul className="mt-6 space-y-3 text-sm sm:text-base">
                <li>✔ Certified AIS 140 Installation</li>
                <li>✔ Mining Department Integration</li>
                <li>✔ Real-Time Regulatory Tracking</li>
                <li>✔ Compliance Documentation</li>
                <li>✔ Technical Support</li>
              </ul>

            </div>

            {/* RTO */}
            <div className="bg-black text-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

              <FaLandmark className="text-4xl lg:text-5xl text-[#FCB13A] mb-5" />

              <span className=" font-semibold text-sm sm:text-base">
                RTO Compliance
              </span>

              <h3 className=" inter text-2xl sm:text-3xl font-bold mt-3 leading-tight">
                Certified VLTD for RTO Compliance
              </h3>

              <p className="text-gray-300 mt-4 lg:mt-5 text-sm sm:text-base leading-relaxed">
                Complete support for Rajasthan RTO and multi-state compliance
                requirements.
              </p>

              <ul className="mt-6 space-y-3 text-gray-300 text-sm sm:text-base">
                <li>✔ Government Approved VLTD</li>
                <li>✔ RTO Registration Support</li>
                <li>✔ Multi-State Compliance</li>
                <li>✔ Warranty & Service Support</li>
                <li>✔ Dedicated Technical Helpline</li>
              </ul>

            </div>

          </div>

        </div>
      </section>





    </div>
  );
}