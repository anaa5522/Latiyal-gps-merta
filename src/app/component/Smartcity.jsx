"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Smartcity() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/20 blur-[120px] rounded-full" />

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
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-orange-500 text-white font-medium text-sm shadow-lg">
              Camera & IoT Installation
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F172A]">
              Delivering Government
              <br />
              Infrastructure Projects —
              <span className="text-orange-500">
                {" "}On Time, On Spec.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl">
              Reliable supply and professional installation of cameras and IoT
              equipment for government-tendered projects.
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              Latiyal GPS brings its proven technical expertise and large-scale
              field experience to government infrastructure projects involving
              camera surveillance and IoT equipment deployment.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              From smart city projects to transport hubs and public safety
              infrastructure, we offer end-to-end execution — from planning
              and procurement to installation, integration, and post-project
              support.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              We understand the documentation standards, compliance
              requirements, and accountability expectations that government
              projects demand. Our team delivers within scope, on schedule,
              and to specification — every time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Request Consultation
                </button>
              </Link>

              <Link href="/services">
                <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition-all duration-300">
                  View Projects
                </button>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Smart City Projects
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Government Tenders
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                IoT Deployment
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Public Safety Infrastructure
              </span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-2xl rounded-[40px]" />

            <img
              src="/images/camera-iot-installation.png"
              alt="Camera & IoT Installation"
              className="relative w-full rounded-[35px] shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
      {/* Hero Section */}

<section className="relative overflow-hidden bg-[#0F172A] py-24 lg:py-32">

  {/* Background Effects */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-5 py-2 rounded-full bg-orange-500 text-white font-medium text-sm shadow-lg">
          Camera & IoT Installation
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mt-6">
          Delivering Government
          <br />
          Infrastructure Projects —
          <span className="text-orange-400">
            {" "}On Time, On Spec.
          </span>
        </h1>

        <p className="text-xl text-gray-300 mt-8 max-w-2xl">
          Reliable supply and professional installation of cameras and IoT
          equipment for government-tendered projects.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-6">
          Latiyal GPS brings proven technical expertise and large-scale field
          experience to government infrastructure projects involving camera
          surveillance and IoT equipment deployment.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          From smart city initiatives to transport hubs and public safety
          infrastructure, we provide complete project execution from planning
          and procurement to installation, integration, and long-term support.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
            Request Consultation
          </button>

          <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0F172A] transition">
            View Capabilities
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/camera-iot-installation.png"
          alt="Camera and IoT Installation"
          className="w-full rounded-[35px] shadow-2xl"
        />
      </motion.div>

    </div>

  </div>

</section>
<section className="py-24 bg-[#F6F2EA]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
        Our Capabilities
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-6">
        End-to-End Government Project Execution
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "Supply of CCTV, PTZ, IP & Dome Cameras",
        "IoT Device Procurement & Deployment",
        "Network Configuration & Integration",
        "Central Monitoring Platform Connectivity",
        "Planning, Commissioning & Handover",
        "Technical Manpower Deployment",
        "Annual Maintenance Contracts (AMC)",
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-5">
            ✓
          </div>

          <h3 className="font-semibold text-lg text-[#0F172A]">
            {item}
          </h3>
        </motion.div>
      ))}

    </div>

  </div>

</section>
<section className="py-24 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-16">
      Project Delivery Workflow
    </h2>

    <div className="grid md:grid-cols-5 gap-8 text-center">

      {[
        "Planning",
        "Procurement",
        "Installation",
        "Integration",
        "Handover",
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          className="bg-[#F6F2EA] p-8 rounded-3xl"
        >
          <div className="text-4xl font-bold text-orange-500 mb-4">
            0{index + 1}
          </div>

          <h3 className="font-semibold text-[#0F172A]">
            {step}
          </h3>
        </motion.div>
      ))}

    </div>

  </div>

</section>
<section className="py-24 bg-[#0F172A]">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <span className="bg-orange-500 text-white px-5 py-2 rounded-full">
      Ideal For
    </span>

    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
      Built for Public Infrastructure Projects
    </h2>

    <p className="text-gray-300 text-lg mt-6 max-w-4xl mx-auto">
      Smart city initiatives, state transport authorities, public safety
      infrastructure, command and control centres, and government-tendered
      IoT deployment projects.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-16">

      {[
        "Smart Cities",
        "Transport Authorities",
        "Public Safety",
        "Government IoT Projects",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-white"
        >
          {item}
        </div>
      ))}

    </div>

  </div>

</section>
    </section>
  );
}