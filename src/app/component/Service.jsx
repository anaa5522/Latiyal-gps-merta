"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    img: "/59d241ca-f401-4559-b0b9-a3248056a72c.png",
    link: "/institute",
  },
  {
    id: "03",
    title: "Fuel Monitoring System",
    desc: "Smart fuel sensor technology delivers real-time fuel level insights. Prevent fuel theft, monitor consumption, and reduce operational costs with accurate and efficient fuel management.",
    img: "/Gemini_Generated_Image_c3y8tac3y8tac3y8.png",
    link: "/fuel",
  },
  {
    id: "04",
    title: "Weighbridge Automation System",
    desc: "Track mining fleets with precision. Improve operational efficiency, monitor routes, and ensure compliance with government regulations.",
    img: "/sv0_e1c4CW5ppx6hm4QhCg0LU7PsSMOQkXzh7_njCCW-6eb4X5gtdm1iFVkD_LswXXehvGBzUrprcRsyU5DKvMUOnCIOw_AM3v_jea6nHwm5RIl0zzpMNWbfMmTNTWuc_RA6QMUF7F3GBJupSxZTc8A7aHv8PKR1D3XifYZdMus74Eusf928o0mY3XNirKxw.jpg",
    link: "automation",
  },
  {
    id: "05",
    title: "AIS 140 GPS Tracking",
    desc: "Government-approved AIS 140 compliant GPS tracking solutions designed for commercial vehicles, passenger transport, and public fleets.",
    img: "/ais.jpg",
    link: "/aistraking",
  },
  {
    id: "06",
    title: "Camera & IoT Solutions",
    desc: "Smart surveillance cameras and IoT-enabled monitoring systems for enhanced fleet safety, security, and operational control.",
    img: "/highway_live_tracking.png",
    link: "/camera",
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
    <div className="bg-[#F6F2EA] overflow-hidden">
    
          {/* ================= HERO SECTION =================  */}
          <motion.div
        className="relative h-[520px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/df95db051ac7c4228bcbaecdc24deb9b.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md text-white text-sm tracking-widest"
          >
            PREMIUM COLLECTION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-[#FCB13A]"
          >
            Service 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg md:text-xl"
          >
            Premium furniture crafted for comfort, elegance and modern lifestyle.
          </motion.p>

        </div>
      </motion.div>
    
          <div className="max-w-7xl mx-auto px-4 py-20">
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
              className={`group rounded-2xl overflow-hidden ${
                service.dark
                  ? "bg-[#FCB13B] text-white"
                  : "bg-white text-black shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 h-[280px]">
                {/* Number */}
                <div className="flex justify-end text-sm opacity-60 font-medium">
                  {service.id}
                </div>

                {/* Title */}
                <h3 className=" inter text-xl font-semibold mt-3 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed opacity-80">
                  {service.desc}
                </p>

                {/* Line */}
                <div className="mt-5 w-12 h-[2px] bg-[#FCB13B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                {/* Explore More Button */}
                <Link
                  href={service.link}
                  className={`absolute bottom-6 right-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    service.dark
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
            </motion.div>
          ))}
        </motion.div>
          </div>

          <div className="w-full ">

      {/* WHY SECTION */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              WHY LATIYAL GPS
            </span>

            <h2 className=" inter text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Businesses and Governments Choose Latiyal GPS
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Trusted across Rajasthan for fleet tracking, compliance, and smart mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">📍</div>
              <h3 className=" inter text-xl font-bold mb-3">Rajasthan-Based. Field-Tested.</h3>
              <p className="text-gray-600">
                Operating from Jaipur, we understand mining, transport, and municipal operations across Rajasthan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">✅</div>
              <h3 className=" inter text-xl font-bold mb-3">Government Approved</h3>
              <p className="text-gray-600">
                AIS 140-certified VLTD devices fully compliant with RTO and government regulations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔧</div>
             
              <h3 className="  text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-gray-600">
                Installation, maintenance, and support — our team stays with you at every step.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">📊</div>
           
              <h3 className=" inter text-xl font-bold mb-3">Data You Can Act On</h3>
              <p className="text-gray-600">
                Convert tracking data into actionable insights to reduce cost and improve safety.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition md:col-span-2">
              <div className="text-5xl mb-4">🏗️</div>
              
              <h3 className=" inter text-xl font-bold mb-3">Built for Every Scale</h3>
              <p className="text-gray-600">
                From 5 vehicles to 500+, our system scales with your business without complexity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className=" inter text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform How Your Fleet Operates?
          </h2>

          <p className="text-lg md:text-xl text-black mb-10">
            Get a free consultation and discover the right tracking solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <a
              href="/contact"
              className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition"
            >
              Get a Free Consultation
            </a>

            <a
              href="tel:+919999999999"
              className="px-8 py-4 border-2 border-black rounded-full font-semibold hover:bg-white  transition"
            >
              Call Us Now
            </a>

          </div>

        </div>
      </section>

    </div>
  
    
        </div>
  );
}