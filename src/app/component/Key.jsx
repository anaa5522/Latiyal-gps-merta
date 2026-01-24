"use client";
import Image from "next/image";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { SiSoundcharts } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import { motion } from "framer-motion";


export default function Key() {
  const features = [
    {
      title: "Google Maps Integration",
      desc: "Real-time vehicle tracking on Google Maps with accurate location data and street view support.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Car Sensors",
      desc: "Monitor vehicle health with advanced sensors for fuel, temperature, door status, and ignition.",
      icon: <FaCar />,
    },
    {
      title: "Organized Information",
      desc: "Comprehensive dashboard with organized reports, analytics, and insights at your fingertips.",
      icon: <SiSoundcharts />
      ,
    },
    {
      title: "Smart Alerts",
      desc: "Instant notifications for speed violations, geofence breaches, and unusual vehicle behavior.",
      icon: <FaBell />,
    },
    {
      title: "Fuel Monitoring",
      desc: "Track fuel consumption, detect fuel theft, and optimize fuel efficiency across your fleet.",
      icon: <BsFillFuelPumpFill />,
    },
    {
      title: "Route History",
      desc: "Complete trip history with playback, distance traveled, stops, and time analysis.",
      icon: <FaRoute />,
    },
    {
      title: "Anti-Theft Protection",
      desc: "Real-time alerts for unauthorized movement with remote immobilization capability.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Mobile App",
      desc: "Track your vehicles on the go with our powerful Android and iOS mobile applications.",
      icon: <FaMobileRetro />,
    },
    {
      title: "24/7 Monitoring",
      desc: "Round-the-clock tracking and monitoring with dedicated customer support team.",
      icon: <IoMdClock />,
    },
  ];

  return (
    <section className="bg-[#F6F2EA] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#FCB13B] font-bold font-montserrat tracking-widest uppercase mb-2">
            Feature
          </p>
          <h2 className="font-inter font-semibold text-[28px]  md:text-4xl py-4   text-gray-900">
            Powerful <span className="text-[#FCB13B]">GPS</span> Tracking Features
          </h2>
          <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to monitor, manage, and protect your vehicles efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}          // niche se start
              whileInView={{ opacity: 1, y: 0 }}       // exact jagah pe smooth stop
              viewport={{ once: true, amount: 0.3 }}   // scroll pe natural trigger
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],               // premium cubic-bezier
                delay: index * 0.15,                    // clean stagger
              }}
              className="
    bg-white rounded-2xl p-8 shadow-sm shadow-xl
  "
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl  text-[#FCB13B] text-3xl mb-6  shadow-[0_10px_20px_rgba(252,177,59,0.45)] ">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-inter font-semibold text-[28px] text-xl font-semibold text-gray-900 mb-3  ">
                {item.title}
              </h3>
              <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] text-[#383838] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

