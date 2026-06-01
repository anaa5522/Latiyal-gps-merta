"use client";

import { motion } from "framer-motion";

export default function Servicespage() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border border-gray-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-700">
              Advanced GPS Tracking Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#] leading-tight"
          >
            Smart Solutions for
            <span className="block text-[#]">
              Smarter Fleets
            </span>
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            From real-time vehicle tracking to government-compliant
            systems — Latiyal GPS delivers technology that keeps your
            operations efficient, safe, and fully in control.
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Trusted by businesses and government agencies across Rajasthan,
            we bring the power of GPS intelligence to every industry,
            every fleet, every journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:scale-105 transition">
              Explore Services
            </button>

            <button className="px-8 py-4 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition">
              Get a Free Consultation
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
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
                <h3 className="text-2xl font-bold text-[#000000]">
                  {item[0]}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item[1]}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      {/* Fleet Management Overview */}
      <section className="py-24 bg-[]">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="max-w-4xl mx-auto text-center mb-20">

            <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold">
              Fleet Management System
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#1A1A1A]">
              Complete Fleet Control.
              <br />
              Zero Blind Spots.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              One powerful platform to track, manage, and optimize your entire fleet —
              built for the industry you work in.
            </p>

            <p className="mt-4 text-gray-500">
              Running a fleet means juggling vehicles, drivers, routes, and costs —
              all at once. Latiyal GPS gives you complete operational control from
              one powerful dashboard.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

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
                className="bg-[#F6F2EA] p-6 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xl">
                  ✓
                </div>

                <h3 className="mt-4 font-semibold text-lg text-[#1A1A1A]">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="py-24 bg-[#F6F2EA]">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="/sv0_e1c4CW5ppx6hm4QhCg0LU7PsSMOQkXzh7_njCCW-6eb4X5gtdm1iFVkD_LswXXehvGBzUrprcRsyU5DKvMUOnCIOw_AM3v_jea6nHwm5RIl0zzpMNWbfMmTNTWuc_RA6QMUF7F3GBJupSxZTc8A7aHv8PKR1D3XifYZdMus74Eusf928o0mY3XNirKxw.jpg"
                alt=""
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div>

              <span className="text-[#D4AF37] font-semibold">
                Construction
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#1A1A1A]">
                Every Machine. Every Site.
                Always Accounted For.
              </h2>

              <p className="mt-6 text-gray-600">
                Heavy equipment scattered across multiple project sites is a costly
                management challenge. Track every machine in real time and improve
                utilization.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">

                {[
                  "Real-time location tracking",
                  "Geofencing alerts",
                  "Idle time monitoring",
                  "Equipment utilization reports",
                  "Trip history logs",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="py-24 bg-whi">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-[#D4AF37] font-semibold">
                Transportation & Logistics
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Right Route.
                Right Time.
                Every Time.
              </h2>

              <p className="mt-6 text-gray-600">
                Optimize routes, reduce delays and improve delivery performance.
              </p>

            </div>

            <img
              src="/highway_live_tracking.png"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

          </div>

        </div>

      </section>
      
      <section className="py-28 bg-[#1A1A1A] text-white">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready To Take Full Control
            Of Your Fleet?
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Get complete visibility, improved efficiency and smarter fleet operations.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-black rounded-xl font-semibold">
            Request Demo
          </button>

        </div>

      </section>
    </section>






  );
}