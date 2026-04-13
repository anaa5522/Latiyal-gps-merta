"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Fleet Management System",
    desc: "Our advanced vehicle tracking technology gives fleet managers complete visibility of their assets. Monitor driver behavior, optimize maintenance schedules, and boost overall fleet productivity with precision.",
    img: "/97529fc7789fb20dc5644029d55f72fb.jpg",
    dark: true,
  },
  {
    id: "02",
    title: "Institute Vehicle Monitoring",
    desc: "Our institutional GPS tracking system with integrated video surveillance ensures maximum safety. Track buses in real-time and access live or recorded footage for enhanced monitoring and security.",
    img: "/image 4.png",
  },
  {
    id: "03",
    title: "Fuel Monitoring System",
    desc: "Smart fuel sensor technology delivers real-time fuel level insights. Prevent fuel theft, monitor consumption, and reduce operational costs with accurate and efficient fuel management.",
    img: "/Gemini_Generated_Image_c3y8tac3y8tac3y8.png",
  },
];

/* 🔥 SMOOTH STAGGER */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* 🔥 SMOOTH + PREMIUM (NOT TOO FAST) */
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
      duration: 0.45, // 👈 smooth feel
      ease: [0.22, 1, 0.36, 1], // 🔥 premium easing
    },
  },
};

export default function Service() {
  return (
    <section className="py-14 md:py-20 bg-[#F6F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[#FCB13B] font-semibold tracking-widest uppercase mb-2"
          >
            Our Solutions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900"
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
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className={`group rounded-2xl overflow-hidden cursor-pointer
              ${
                itemData.dark
                  ? "bg-[#FCB13B] text-white"
                  : "bg-white text-black shadow-sm hover:shadow-xl"
              }`}
            >
              
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={itemData.img}
                  alt={itemData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[230px]">
                
                {/* Number */}
                <div className="flex justify-end text-sm opacity-60 font-medium">
                  {itemData.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-2 group-hover:text-black transition duration-300">
                  {itemData.title}
                </h3>

                {/* Desc */}
                <p className="text-sm opacity-70 leading-relaxed mt-2">
                  {itemData.desc}
                </p>

                {/* Line */}
                <div className="mt-4 w-10 h-[2px] bg-[#FCB13B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}