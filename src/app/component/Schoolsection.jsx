"use client";

import { motion } from "framer-motion";
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
    <div className="bg-[#F6F2EA] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
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
                <button className="bg-black hover:bg-orange- text-white px-8 py-4 rounded-xl font-semibold transition">
                  Request Demo
                </button>

                <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition">
                  Learn More
                </button>
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

      {/* About Section */}
      <section className="py-20 bg-whit">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            Complete School Transport Management Platform
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            This is not just a GPS tracker. It is a complete school transport
            management ecosystem designed to strengthen trust between schools,
            parents, and students. Every journey becomes safer, more transparent,
            and easier to manage.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F17]">
              Key Features
            </h2>

            <p className="text-gray-600 mt-4">
              Everything needed to manage school transportation efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-orange-500 text-3xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Best For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-3xl p-8">
              <FaBus className="text-4xl text-orange-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Schools
              </h3>
              <p className="text-gray-300">
                Improve safety, transparency, and transport operations.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8">
              <FaBus className="text-4xl text-orange-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Colleges
              </h3>
              <p className="text-gray-300">
                Manage multiple routes and student transportation efficiently.
              </p>
            </div>

            <div className="bg-white/ rounded-3xl p-8">
              <FaBus className="text-4xl text-orange-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Transport Operators
              </h3>
              <p className="text-gray-300">
                Centralized fleet tracking and automated route management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Make School Transportation Safer & Smarter
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Empower parents with real-time visibility and help schools manage
            transportation efficiently with Latiyal GPS.
          </p>

          <button className="bg-white text-orange-500 px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}