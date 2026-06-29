"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBus,
  FaMapMarkedAlt,
  FaBell,
  FaUserCheck,
  FaRoute,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

export default function Schoolsection() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Live Bus Tracking",
      desc: "Parents can track the exact bus location in real time through the mobile app.",
    },
    {
      icon: <FaBell />,
      title: "Arrival Notifications",
      desc: "Receive stop-wise ETA updates and instant push notifications.",
    },
    {
      icon: <FaUserCheck />,
      title: "Student Alerts",
      desc: "Automatic boarding and de-boarding alerts for complete peace of mind.",
    },
    {
      icon: <FaRoute />,
      title: "Route Scheduling",
      desc: "Smart morning and evening route planning with automation.",
    },
    {
      icon: <FaUserTie />,
      title: "Driver Management",
      desc: "Manage drivers and conductors with direct contact accessibility.",
    },
    {
      icon: <FaChartLine />,
      title: "Reports & Analytics",
      desc: "Access attendance reports, route history, and trip records instantly.",
    },
  ];

  return (
    <div className="bg-[#F6F2EA] overflow-hidden select-none">
      {/* Hero Section */}
      <section className="relative pt-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#0F172A] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
                School Bus Management
              </span>

              <h1 className=" inter text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Know Where Your Child's Bus Is —
                <span className="text-orang"> At Any Moment.</span>
              </h1>

              <p className="mt-6 text-xl text-gray-700">
                As simple and reliable as tracking a train — built specifically
                for school transportation.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Latiyal GPS's Advanced School Bus Management System brings a new
                level of transparency and safety to student transport. Inspired
                by the ease of train tracking, our platform allows parents to
                track buses live while schools efficiently manage routes,
                drivers, attendance, and operations from one centralized
                dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={"contact"} className="bg-black hover:bg-orange- text-white px-8 py-4 rounded-xl font-semibold transition">
                  Request Demo
                </Link>

                <Link href={"servicepage"} className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition">
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/fleet_control_center.png"
                alt="School Bus Management"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features */}
      {/* Features */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/fleet_city_highway.png"
                alt="School Bus Management"
                className="w-full h-[300px] md:h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Right Features (First 3) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 bg-[#0F172A] text-white rounded-full text-sm font-semibold mb-4">
                Key Features
              </span>

              <h2 className="inter text-4xl font-bold text-[#0F172A] mb-6">
                Everything Needed For Smart School Transportation
              </h2>

              <p className="text-gray-600 mb-8">
                Powerful tools designed to improve student safety,
                streamline fleet operations, and provide complete
                visibility for schools and parents.
              </p>

              <div className="space-y-5">
                {features.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-black shadow-lg hover:shadow-xl transition"
                  >
                    <div className="mt-6 w-2 h-2 hidden md:block rounded-full bg-white"></div>

                    <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center bg-white/10 text-[#FCB13A] text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="inter text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {features.slice(3).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-black shadow-lg hover:shadow-xl transition"
              >
                <div className="mt-6 w-2 h-2 hidden md:block rounded-full bg-white"></div>

                <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center bg-white/10 text-[#FCB13A] text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="inter text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}