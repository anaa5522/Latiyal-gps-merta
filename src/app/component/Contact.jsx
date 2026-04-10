"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-[#F6F2EA] text-black min-h-screen">

      {/* ================= HERO HEADING ================= */}
      <div
        className="text-center my-0 relative bg-cover bg-center bg-no-repeat py-20 md:py-40 px-4"
        style={{
          backgroundImage:
            "url('/df95db051ac7c4228bcbaecdc24deb9b.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#FCB13B]"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-white/80 text-base md:text-xl max-w-2xl mx-auto"
          >
            We are always ready to help you with GPS tracking solutions, support
            and business inquiries.
          </motion.p>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="p-6 md:p-16">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#FCB13B]/30">
            <h2 className="text-2xl font-semibold mb-6 text-[#FCB13B]">
              Get In Touch
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <input
                type="text"
                placeholder="Topic"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />
              <textarea
                placeholder="Type here..."
                rows={4}
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              <button className="w-full bg-[#FCB13B] text-black font-semibold py-3 rounded-full hover:scale-105 transition">
                Send Now
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-black/70 max-w-md">
              We are here to help you with GPS tracking solutions. Contact us anytime
              for support, queries, or business inquiries.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p>+92 020 852</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">Email</p>
                  <p>example@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">WhatsApp</p>
                  <p>0321 234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IoLocationSharp className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">Office</p>
                  <p>Oak Ridge, India</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[#FCB13B]/30">
              <iframe
                src="https://maps.google.com/maps?q=Jodhpur,Rajasthan,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-40"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BANNER ================= */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="banner"
            className="w-full h-64 object-cover opacity-60"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-semibold max-w-xl">
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