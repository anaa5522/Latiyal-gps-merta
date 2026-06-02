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

              <h1 className=" inter text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Not a Single Litre
                <span className=""> Unaccounted For.</span>
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
                <button className=" bg-black text-white px-8 py-4 rounded-xl font-semibold transition">
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
                src="/warehouse_dashboard.png"
                alt="Fuel Management System"
                className="w-full h-[200px] h-[500px] rounded-3xl shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

       {/* Result Section */}
      <section className="py-24  text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <FaShieldAlt className="text-6xl text-[#FCB13A] mb-6" />

              <h2 className=" inter text-4xl font-bold mb-6 text-black">
                The Result
              </h2>

              <p className="text-black text-lg leading-relaxed">
                Significant reduction in fuel costs, zero tolerance for fuel
                theft, accurate operational reporting, and a complete digital
                audit trail of every litre used across your fleet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-[#FCB13A]">100%</h3>
                <p className="mt-2 text-black">
                  Fuel Visibility
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-[#FCB13A]">24/7</h3>
                <p className="mt-2 text-black">
                  Monitoring
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-[#FCB13A]">Instant</h3>
                <p className="mt-2 text-black">
                  Theft Detection
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-[#FCB13A]">Smart</h3>
                <p className="mt-2 text-black">
                  Cost Optimization
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className=" pb-24 pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/fleet_city_highway.png"
                alt="School Bus Management"
                className="w-full h-[300px] lg:h-[700px] mt-30 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 bg-[#0F172A] text-white rounded-full text-sm font-semibold mb-4">
                Key Features
              </span>

              <h2 className=" inter text-4xl font-bold text-[#0F172A] mb-6">
                Powerful tools to eliminate fuel loss and improve fleet profitability.
              </h2>

              <p className="text-gray-600 mb-8">
                Powerful tools designed to improve student safety,
                streamline fleet operations, and provide complete
                visibility for schools and parents.
              </p>

              <div className="space-y-5">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-gra-100 shadow-sm hover:shadow-xl  bg-black transition-all duration-300"
                  >
                    {/* Index Dot */}
                    <div className="mt-6 w-2 h-2 hidden md:block rounded-full bg-white flex-shrink-0"></div>

                    {/* Icon */}
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-orang-100 flex items-center justify-center text-[#FCB13A] text-2xl">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className=" inter text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-white text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}