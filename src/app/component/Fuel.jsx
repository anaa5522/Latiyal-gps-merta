"use client";

import { motion } from "framer-motion";
import {
  FaGasPump,
  FaTint,
  FaBell,
  FaChartLine,
  FaRoute,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";

export default function Fuel() {
  const features = [
    {
      icon: <FaTint />,
      title: "Live Fuel Monitoring",
      desc: "Track fuel levels in real time using advanced in-vehicle fuel sensors.",
    },
    {
      icon: <FaBell />,
      title: "Theft & Leakage Alerts",
      desc: "Get instant notifications whenever abnormal fuel drops are detected.",
    },
    {
      icon: <FaGasPump />,
      title: "Refuelling Tracking",
      desc: "Automatically record every fuel refill with time, location, and quantity.",
    },
    {
      icon: <FaChartLine />,
      title: "Consumption Reports",
      desc: "Detailed vehicle-wise fuel usage reports for complete visibility.",
    },
    {
      icon: <FaRoute />,
      title: "Efficiency Analysis",
      desc: "Compare actual vs expected fuel consumption across routes.",
    },
    {
      icon: <FaUserTie />,
      title: "Driver Performance",
      desc: "Monitor driver-wise fuel efficiency and identify improvement areas.",
    },
  ];

  return (
    <div className="bg-[#F6F2EA] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#0F172A] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
                Fuel Management
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Not a Single Litre
                <span className="text-orange-500"> Unaccounted For.</span>
              </h1>

              <p className="mt-6 text-xl text-gray-700">
                Stop fuel theft, monitor consumption, and take control of your fleet's biggest hidden cost.
              </p>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Fuel is the largest variable expense in fleet operations and one
                of the most vulnerable areas for theft, misuse, and inefficiency.
                Latiyal GPS's Fuel Management System provides real-time fuel
                monitoring, theft detection, refuelling records, and advanced
                analytics that help organizations reduce costs and improve
                operational efficiency.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Request Demo
                </button>

                <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/fuel-management-system.png"
                alt="Fuel Management System"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            Complete Fuel Intelligence Platform
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Whether you manage a transport company, construction equipment,
            logistics fleet, mining vehicles, or government transport,
            our Fuel Management System gives you complete visibility into
            every litre consumed and every rupee spent.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              Key Features
            </h2>

            <p className="text-gray-600 mt-4">
              Powerful tools to eliminate fuel loss and improve fleet profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-3xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <FaShieldAlt className="text-6xl text-orange-400 mb-6" />

              <h2 className="text-4xl font-bold mb-6">
                The Result
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Significant reduction in fuel costs, zero tolerance for fuel
                theft, accurate operational reporting, and a complete digital
                audit trail of every litre used across your fleet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-orange-400">100%</h3>
                <p className="mt-2 text-gray-300">
                  Fuel Visibility
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-orange-400">24/7</h3>
                <p className="mt-2 text-gray-300">
                  Monitoring
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-orange-400">Instant</h3>
                <p className="mt-2 text-gray-300">
                  Theft Detection
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-orange-400">Smart</h3>
                <p className="mt-2 text-gray-300">
                  Cost Optimization
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Eliminate Fuel Theft & Reduce Operating Costs
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Gain complete control over fuel consumption and make data-driven
            decisions with Latiyal GPS Fuel Management System.
          </p>

          <button className="bg-white text-orange-500 px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}