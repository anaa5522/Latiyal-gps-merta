"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaMapMarkedAlt,
  FaCheckCircle,
  FaTools,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";
import { FaPhoneAlt, FaArrowRight, } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Fleet Management System",
    desc: "Our advanced vehicle tracking technology gives fleet managers complete visibility of their assets. Monitor driver behavior, optimize maintenance schedules, and boost overall fleet productivity with precision.",
    img: "/img.jpg",
    dark: true,
    link: "/fleetmanagment",
  },
  {
    id: "02",
    title: "Institute Vehicle Monitoring",
    desc: "Our institutional GPS tracking system with integrated video surveillance ensures maximum safety. Track buses in real-time and access live or recorded footage for enhanced monitoring and security.",
    img: "/518bd6d2-7019-4cff-bd06-7308a4e2fbd3.png",
    link: "/institute",
  },
  {
    id: "03",
    title: "Fuel Monitoring System",
    desc: "Smart fuel sensor technology delivers real-time fuel level insights. Prevent fuel theft, monitor consumption, and reduce operational costs with accurate and efficient fuel management.",
    img: "/aa2ab58f-5b80-48ca-af46-a18d213631f5.png",
    link: "/fuel",
  },
  {
    id: "04",
    title: "Weighbridge Automation System",
    desc: "Track mining fleets with precision. Improve operational efficiency, monitor routes, and ensure compliance with government regulations.",
    img: "/864e2f8a-fff7-4e50-a79c-07ba26100199.png",
    link: "automation",
  },
  {
    id: "05",
    title: "AIS 140 GPS Tracking",
    desc: "Government-approved AIS 140 compliant GPS tracking solutions designed for commercial vehicles, passenger transport, and public fleets.",
    img: "/475bb22c-b0af-49f9-8f56-1c06efed8b74.png",
    link: "/aistraking",
  },
  {
    id: "06",
    title: "Camera & IoT Solutions",
    desc: "Smart surveillance cameras and IoT-enabled monitoring systems for enhanced fleet safety, security, and operational control.",
    img: "/ChatGPT Image Jun 3, 2026, 09_12_24 PM.png",
    link: "/camera",
  },
];

const features = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Rajasthan-Based. Field-Tested.",
    desc: "Operating from Jaipur, we understand mining, transport, and municipal operations across Rajasthan.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Government Approved",
    desc: "AIS 140-certified VLTD devices fully compliant with RTO and government regulations.",
  },
  {
    icon: <FaTools />,
    title: "End-to-End Support",
    desc: "Installation, maintenance and support from our experienced technical team.",
  },
  {
    icon: <FaChartLine />,
    title: "Data You Can Act On",
    desc: "Transform tracking data into meaningful insights to reduce costs and improve safety.",
  },
  {
    icon: <FaBuilding />,
    title: "Built for Every Scale",
    desc: "From 5 vehicles to 500+, our platform grows with your business effortlessly.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Service() {
  return (
    <div className="bg-[#F6F2EA] overflow-hidden select-none">

      {/* ================= HERO SECTION =================  */}
      <motion.div
        className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Background Image */}
        <img
          src="/ChatGPT Image Jun 27, 2026, 12_37_17 PM.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 flex justify-center">
          <div className="text-center max-w-4xl">

            {/* Heading */}
            <motion.h1
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide "
            >
              <span className="text-[#FCB13B]">S</span>ervice us
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="h-1 bg-[#FCB13B] mx-auto rounded-full mt-4"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}
              className="mt-6 text-sm sm:text-base md:text-base lg:text-lg text-gray-400 leading-8 max-w-2xl mx-auto"
            >
              Smart GPS Tracking Solutions for Cars, Trucks, Buses & Fleet Management.
              Monitor your vehicles anytime, anywhere with real-time tracking and
              advanced security features.
            </motion.p>

          </div>
        </div>

      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
        <div className="text-center mb-16">


          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className=" inter text-4xl md:text-5xl font-semibold text-gray-900"
          >
            Smart Tracking Systems
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className={`group rounded-2xl overflow-hidden ${service.dark
                ? "bg-[#FCB13B] text-white"
                : "bg-white text-black shadow-sm hover:shadow-xl"
                }`}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover  transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col min-h-[320px] p-6">

                {/* Number */}
                <div className="flex justify-end text-sm opacity-60 font-medium">
                  {service.id}
                </div>

                {/* Title */}
                <h3 className="inter text-xl font-semibold mt-3 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-sm leading-7 opacity-80">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom */}
                <div className="pt-6 mt-auto">

                  <div className="w-12 h-[2px] bg-[#FCB13B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                  <Link
                    href={service.link}
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${service.dark
                      ? "text-white hover:gap-4"
                      : "text-[#FCB13B] hover:gap-4"
                      }`}
                  >
                    Explore More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full ">

        {/* WHY SECTION */}
        <section className="relative py-24 overflow-hidden bg-[#F6F2EA]">

          {/* Background */}
          <img
            src="/why-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">

              <span className="inline-flex items-center rounded-full bg-[#F6EBD8] px-5 py-2 text-sm font-semibold text-[#FCB13B]">
                WHY LATIYAL GPS
              </span>

              <h2 className="inter mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Businesses & Governments
                <span className="text-[#FCB13B]"> Trust Us</span>
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-8">
                Trusted across Rajasthan for fleet tracking, AIS-140 compliance,
                vehicle security and smart mobility solutions.
              </p>

            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >

                  {/* Background Glow */}
                  <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#FCB13B]/10 blur-3xl group-hover:bg-[#FCB13B]/20 transition-all duration-500"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#FCB13B] text-white flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:rotate-6 transition-transform duration-500">

                    {item.icon}

                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 inter text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                  {/* Bottom Line */}
                  <div className="relative z-10 mt-8 h-[3px] w-14 rounded-full bg-[#FCB13B] group-hover:w-24 transition-all duration-500"></div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden px-10 text-black">

          {/* Pattern */}
          

          <div className="relative max-w-6xl mx-auto pb-10">

            
              {/* Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FCB13B]/15 px-5 py-2 text-sm font-semibold text-[#FCB13B]">
                  <FaCheckCircle />
                  Start Today
                </span>
              </div>

              {/* Heading */}
              <h2 className="inter mt-8 text-center text-4xl md:text-6xl font-bold leading-tight">
                Ready to Transform
                <br />
                <span className="text-[#FCB13B]">
                  Your Fleet Operations?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-3xl mx-auto text-center  text-lg leading-8">
                Experience real-time GPS tracking, fleet monitoring, AIS-140 compliance
                and advanced vehicle security with Latiyal GPS.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FCB13B] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(252,177,59,0.45)]"
                >
                  Get Free Consultation

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+919928311021"
                  className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white bg-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  <FaPhoneAlt />

                  Call Us Now
                </a>

              </div>

          

          </div>

        </section>

      </div>


    </div>
  );
}