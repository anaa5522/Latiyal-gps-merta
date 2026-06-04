"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Automotion() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32 select-none">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Label */}
            <span className="inline-block px-5 py-2 rounded-full bg-black text-white font-medium text-sm shadow-lg">
              Weighbridge Automation
            </span>

            {/* Headline */}
            <h1 className=" inter text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F172A]">
              Accurate.
              <br />
              Transparent.
              <br />
              <span className="text">
                Fully Automated.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl">
              Digitise your weighbridge operations and simplify e-Rawanna
              compliance in Rajasthan Mining.
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              In Rajasthan's mining sector, accurate weighing is not just an
              operational necessity — it's a legal requirement. Manual
              weighbridge processes are time-consuming, error-prone, and
              vulnerable to manipulation.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              Latiyal GPS's Weighbridge Automation System replaces manual
              processes with a fully digital workflow — from vehicle entry
              to automatic e-Rawanna generation — delivering accuracy,
              accountability, and regulatory compliance at every step.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-black hover:bg-or text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Request Demo
                </button>
              </Link>

              <Link href="/services">
                <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/f8c720a26a03c39fc0eb6274755de298.jpg"
              alt="Weighbridge Automation"
              className="w-full rounded-[35px] shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
      {/* Key Features Section */}

<section className="py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-5 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
        Key Features
      </span>

      <h2 className=" inter text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
        Intelligent Weighbridge Automation
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Automate every stage of your weighing process with advanced
        monitoring, compliance integration, and real-time reporting.
      </p>
    </motion.div>

    <div className="space-y-4">

      {/* First 6 Features */}
      <div className="grid md:grid-cols-2 gap-4">

        {[
          "Automated vehicle identification at entry and exit points",
          "Real-time weight recording with tamper-proof data logging",
          "Direct integration with Rajasthan Mining's e-Rawanna portal",
          "Overloading prevention and under-reporting detection",
          "Digital weight receipts and audit-ready transaction records",
          "Centralized monitoring dashboard for multi-site operations",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FCB13A]/20 flex items-center justify-center text-[#FCB13A] font-bold">
              0{index + 1}
            </div>

            <h3 className="text-white font-medium leading-snug">
              {item}
            </h3>
          </motion.div>
        ))}

      </div>

      {/* Last Feature Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FCB13A]/20 flex items-center justify-center text-[#FCB13A] font-bold">
          07
        </div>

        <h3 className="text-white font-medium">
          Alerts and reports for supervisors and compliance officers
        </h3>
      </motion.div>

    </div>

  </div>
</section>

{/* Why It Matters */}

<section className="py-16 md:py-20 lg:py-24  overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="inline-block px-4 py-2 md:px-5 md:py-2 rounded-full bg-black text-white font-semibold text-sm md:text-base mb-6">
        Why It Matters
      </span>

      <h2 className=" inter text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8 leading-tight">
        Built for e-Rawanna Compliance
      </h2>

      <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
        The e-Rawanna system requires digitally verified and accurate
        mineral transport records for every movement. Our automation
        system ensures every transaction is correctly captured,
        securely stored, and seamlessly submitted — protecting your
        mining operations from regulatory risk, compliance issues,
        and financial penalties.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-12 md:mt-16">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8">
          <h3 className="text-4xl md:text-5xl font-bold text-[#FCB13A] mb-3">
            100%
          </h3>
          <p className="text-black text-sm md:text-base">
            Digital Accuracy
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8">
          <h3 className="text-4xl md:text-5xl font-bold text-[#FCB13A] mb-3">
            24/7
          </h3>
          <p className="text-black text-sm md:text-base">
            Monitoring & Compliance
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 sm:col-span-2 lg:col-span-1">
          <h3 className="text-4xl md:text-5xl font-bold text-[#FCB13A] mb-3">
            Zero
          </h3>
          <p className="text-black text-sm md:text-base">
            Manual Errors
          </p>
        </div>

      </div>

    </motion.div>

  </div>
</section>
    </section>
  );
}