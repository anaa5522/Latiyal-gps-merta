"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-[#F6F2EA] text-black min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <motion.div
        className="relative h-[420px] sm:h-[500px] lg:h-[520px] flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/4654ff73-5607-44b2-99d9-8bbf026aeb69.png"
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full px-6 lg:px-16">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Contact Us
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200"
            >
              Get in touch with our team for GPS tracking,<br/> fleet
              management and AIS 140 compliant solutions.
            </motion.p> */}
          </div>
        </div>
      </motion.div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="p-6 md:p-16">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#FCB13B]/30 select-none">
            <h2 className=" inter text-2xl font-semibold mb-6 select-none text-[#FCB13B]">
              Make an Enquiry
            </h2>

            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <input
                type="text"
                placeholder="Topic"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <textarea
                placeholder="Type here..."
                rows={4}
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              <button className="w-full bg-[#FCB13B] text-black font-semibold py-3 rounded-xl hover:scale-105 hover:text-white transition">
                Send Now
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 w-full">

            <p className=" montserrat text-black/70 max-w-md text-sm select-none sm:text-base leading-relaxed">
              We are here to help you with GPS tracking solutions. Contact us anytime
              for support, queries, or business inquiries.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 px-1 sm:px-2">

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#FCB13B] text-lg mt-1" />
                <div>
                  <p className="text-sm text-black/60 select-none">Phone</p>
                  <p className="text-sm sm:text-base break-all">
                    +91 7041296455
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdEmail className="text-[#FCB13B] text-xl mt-1" />
                <div>
                  <p className="text-sm text-black/60 select-none">Email</p>
                  <p className="text-sm sm:text-base break-all">
                    support@latiyalgps.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-[#FCB13B] text-xl mt-1" />
                <div>
                  <p className="text-sm text-black/60 select-none">WhatsApp</p>
                  <p className="text-sm sm:text-base break-all">
                    +91 7041296455
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoLocationSharp className="text-[#FCB13B] text-xl pb-10 " size={70} />
                <div className="gap-7">
                  <p className="text-sm text-black/60 select-none">Office</p>
                  <p className="text-sm sm:text-base">
                    PLOT No. SA-04, NARAYAN SAGAR-ABC, NEAR SAATHI TEXTILES, NARAYAN VIHAR, JAIPUR, Jaipur, Rajasthan, 302020
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[#FCB13B]/30 w-full">
              <iframe
                src="https://maps.google.com/maps?q=Jodhpur,Rajasthan,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 sm:h-60 md:h-40 lg:h-52"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BANNER ================= */}
        <div className="mt-16 relative rounded-2xl overflow-hidden select-none">
          <img
            src="/f367ba2d6e6058ea09cfe5f4ac04b063.jpg"
            alt="banner"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className=" inter text-2xl md:text-3xl font-semibold max-w-xl text-white">
              Let’s Build Something Amazing Together
            </h2>

            <button className="mt-4 px-6 py-2 bg-[#FCB13B] text-black rounded-full font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}