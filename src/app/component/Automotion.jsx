"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Automotion() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300/20 blur-[120px] rounded-full" />

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
            <span className="inline-block px-5 py-2 rounded-full bg-orange-500 text-white font-medium text-sm shadow-lg">
              Weighbridge Automation
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F172A]">
              Accurate.
              <br />
              Transparent.
              <br />
              <span className="text-orange-500">
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
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
              src="/images/weighbridge-automation.png"
              alt="Weighbridge Automation"
              className="w-full rounded-[35px] shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
      {/* Key Features Section */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold mb-4">
        Key Features
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
        Intelligent Weighbridge Automation
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
        Automate every stage of your weighing process with advanced
        monitoring, compliance integration, and real-time reporting.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "Automated vehicle identification at entry and exit points",
        "Real-time weight recording with tamper-proof data logging",
        "Direct integration with Rajasthan Mining's e-Rawanna portal",
        "Overloading prevention and under-reporting detection",
        "Digital weight receipts and audit-ready transaction records",
        "Centralized monitoring dashboard for multi-site operations",
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="bg-[#F6F2EA] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-5">
            ✓
          </div>

          <p className="text-[#0F172A] font-medium text-lg leading-relaxed">
            {feature}
          </p>
        </motion.div>
      ))}

      {/* Last Feature */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl"
      >
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-5">
          📊
        </div>

        <p className="font-medium text-lg leading-relaxed">
          Alerts and reports for supervisors and compliance officers
        </p>
      </motion.div>

    </div>
  </div>
</section>

{/* Why It Matters */}

<section className="py-24 bg-[#0F172A] overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="inline-block px-5 py-2 rounded-full bg-orange-500 text-white font-semibold mb-6">
        Why It Matters
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Built for e-Rawanna Compliance
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
        The e-Rawanna system requires digitally verified and accurate
        mineral transport records for every movement. Our automation
        system ensures every transaction is correctly captured,
        securely stored, and seamlessly submitted — protecting your
        mining operations from regulatory risk, compliance issues,
        and financial penalties.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
          <h3 className="text-5xl font-bold text-orange-400 mb-3">
            100%
          </h3>
          <p className="text-gray-300">
            Digital Accuracy
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
          <h3 className="text-5xl font-bold text-orange-400 mb-3">
            24/7
          </h3>
          <p className="text-gray-300">
            Monitoring & Compliance
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
          <h3 className="text-5xl font-bold text-orange-400 mb-3">
            Zero
          </h3>
          <p className="text-gray-300">
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