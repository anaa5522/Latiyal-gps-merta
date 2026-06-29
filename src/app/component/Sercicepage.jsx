"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Servicespage() {

  const features = [
    {
      title: "Live GPS Tracking",
      image: "/b486cb9c0d28c3f9ebc947682c2820fd.jpg",
      description:
        "Track your vehicles in real time with accurate location updates and complete route history.",
    },
    {
      title: "Driver Monitoring",
      image: "/0d8a0ecbcba9c837facc7efdea94438f.jpg",
      description:
        "Monitor driver behavior, overspeeding, harsh braking and improve road safety.",
    },
    {
      title: "Route Optimization",
      image: "/5457f05bea206d3aeccf6749065d453b.jpg",
      description:
        "Plan the shortest and most fuel-efficient routes to reduce travel time and costs.",
    },
    {
      title: "Geofencing Alerts",
      image: "/9fd96a6e1a3bf163e7e359de795580cd.jpg",
      description:
        "Receive instant alerts whenever vehicles enter or leave predefined locations.",
    },
    {
      title: "Fuel & Idle Reports",
      image: "/0ca8e3c17922b22e6928cee9af428997.jpg",
      description:
        "Track fuel usage and idle time to reduce unnecessary operating expenses.",
    },
    {
      title: "Fleet Analytics",
      image: "/06d40c3b60bac518486ed24f94734725.jpg",
      description:
        "Access detailed reports and insights to improve your fleet performance and productivity.",
    },
  ];

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
                <Link href={"/servicepage"}  className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:scale-105 transition">
                  Explore Services
                </Link>

                <Link href={"contact"} className="px-8 py-4 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-[#FCB13B] transition">
                  Get a Free Consultation
                </Link>
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

            <h2 className="inter mt-5 text-3xl sm:text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight">
              Complete Fleet Control.
              <br />
              Zero Blind Spots.
            </h2>

            <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              One powerful platform to track, manage and optimize your fleet.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {features.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl h-[340px] group shadow-lg"
              >

                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6">

                  {/* Top */}
                  <div>

                    <div className="w-14 h-14 rounded-2xl bg-[#FCB13B] flex items-center justify-center text-white font-bold text-xl shadow-lg mb-5">
                      0{i + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                  </div>

                  {/* Bottom */}
                  <div>

                    <p className="text-gray-200 text-sm leading-7">
                      {item.description}
                    </p>

                   

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="pb-16 lg:py-24 overflow-hidden">
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


     
    </section>






  );
}