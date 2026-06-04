"use client";

import { motion } from "framer-motion";

export default function Servicespage() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32 select-none">

      <section className="py-24] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border border-gray-200 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-gray-700">
            Advanced GPS Tracking Solutions
          </span>
        </div>

        {/* Heading */}
        <h1 className=" inter text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
          Smart Solutions for
          <span className="block text-[#FCB13A]">
            Smarter Fleets
          </span>
        </h1>

        {/* Sub Heading */}
        <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
          From real-time vehicle tracking to government-compliant
          systems — Latiyal GPS delivers technology that keeps your
          operations efficient, safe, and fully in control.
        </p>

        {/* Supporting Text */}
        <p className="mt-6 text-base md:text-lg text-gray-500">
          Trusted by businesses and government agencies across Rajasthan,
          we bring the power of GPS intelligence to every industry,
          every fleet, every journey.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:scale-105 transition">
            Explore Services
          </button>

          <button className="px-8 py-4 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition">
            Get a Free Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          {[
            ["5000+", "Vehicles Tracked"],
            ["99.9%", "Uptime"],
            ["24/7", "Monitoring"],
            ["100%", "Compliance Ready"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-black">
                {item[0]}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="/fleet_control_center.png"
          alt="GPS Fleet Management"
          className="w-full h-[350px] lg:h-[700px] object-cover rounded-3xl shadow-2xl"
        />
      </motion.div>

    </div>
  </div>
      </section>
      {/* Fleet Management Overview */}
      <section className="py-16 md:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">

      <span className="inline-block px-4 py-2 rounded-full bg-[#FCB13A]/10 text-[#FCB13A] font-semibold text-sm md:text-base">
        Fleet Management System
      </span>

      <h2 className=" inter mt-5 text-3xl sm:text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight">
        Complete Fleet Control.
        <br />
        Zero Blind Spots.
      </h2>

      <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        One powerful platform to track, manage and optimize your fleet.
      </p>

    </div>

    {/* Features */}
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

      {[
        "Live GPS Tracking",
        "Driver Monitoring",
        "Route Optimization",
        "Geofencing Alerts",
        "Fuel & Idle Reports",
        "Fleet Analytics",
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-[#F8F8F8] border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 md:gap-5">

            {/* Number */}
            <div className="text-3xl md:text-5xl font-bold text-[#FCB13A]/30 flex-shrink-0">
              0{i + 1}
            </div>

            <div>
              <h3 inter className="text-lg md:text-2xl font-bold text-[#0F172A] mb-2 md:mb-3">
                {item}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Advanced monitoring and reporting tools designed to
                improve fleet visibility, productivity and safety.
              </p>

              <div className="mt-4 md:mt-5 h-[3px] w-12 md:w-14 bg-[#FCB13A] rounded-full"></div>
            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
      <section className="py-16 lg:py-24 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <span className="inline-block px-5 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-semibold mb-4">
          Transportation & Logistics
        </span>

        <h2 className=" inter text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
          Right Route.
          <br />
          Right Time.
          <br />
          Every Time.
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Optimize routes, reduce delays, improve delivery performance,
          and gain complete visibility across your transportation network.
        </p>

        <div className="space-y-4">

          {/* First 4 Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              "Real-Time Vehicle Tracking",
              "Route Optimization",
              "Delivery Monitoring",
              "Fuel Efficiency Reports",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FCB13A]/20 flex items-center justify-center text-[#FCB13A] font-bold flex-shrink-0">
                  0{index + 1}
                </div>

                <h3 className="text-white text-sm sm:text-base font-medium leading-snug">
                  {item}
                </h3>
              </div>
            ))}

          </div>

          {/* Feature 05 */}
          <div className="flex items-center gap-4 p-4 sm:p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="w-10 h-10 rounded-xl bg-[#FCB13A]/20 flex items-center justify-center text-[#FCB13A] font-bold flex-shrink-0">
              05
            </div>

            <h3 className="text-white text-sm sm:text-base font-medium">
              Driver Performance Tracking
            </h3>

          </div>

          {/* Feature 06 */}
          <div className="flex items-center gap-4 p-4 sm:p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="w-10 h-10 rounded-xl bg-[#FCB13A]/20 flex items-center justify-center text-[#FCB13A] font-bold flex-shrink-0">
              06
            </div>

            <h3 className="text-white text-sm sm:text-base font-medium">
              Instant Alerts & Notifications
            </h3>

          </div>

        </div>

      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <img
          src="/highway_live_tracking.png"
          alt="Transportation & Logistics"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] object-cover rounded-[24px] lg:rounded-[32px] shadow-2xl"
        />
      </motion.div>

    </div>

  </div>
</section>
     
      
      <section className="py-28  text-black">

        <div className="container mx-auto px-6 text-center">

          <h2 className=" inter text-5xl font-bold">
            Ready To Take Full Control
            Of Your Fleet?
          </h2>

          <p className="mt-6 text-black max-w-2xl mx-auto">
            Get complete visibility, improved efficiency and smarter fleet operations.
          </p>

          <button className="mt-10 px-8 py-4 bg-black text-white rounded-xl font-semibold">
            Request Demo
          </button>

        </div>

      </section>
    </section>






  );
}