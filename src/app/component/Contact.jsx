"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {

  // =========================
  // 🔥 FORM STATE
  // =========================
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    message: ""
  });

  // =========================
  // 🔥 HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // =========================
  // 🔥 SUBMIT FORM
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:7000/website/add",
        form
      );

      console.log("SUCCESS:", res.data);

      toast.success("sent successfully!");

      // reset form
      setForm({
        name: "",
        email: "",
        product: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      toast.error("Failed to sent!");
    }
  };

  return (
    <div className="bg-[#F6F2EA] text-black min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <motion.div
        className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[490px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Background Image */}
        <img
          src="/ChatGPT Image Jun 27, 2026, 12_30_48 PM.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

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
              className="text-3xl sm:text-xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide"
            >
             <span className="text-[#FCB13B]">C</span>ontact us
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

      {/* ================= CONTACT SECTION ================= */}
      <div className="p-6 md:p-16">
        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= LEFT FORM ================= */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#FCB13B]/30 select-none">

            <h2 className="text-2xl font-semibold mb-6 text-[#FCB13B]">
              Make an Enquiry
            </h2>

            {/* 🔥 FORM */}
            {/* 🔥 FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              {/* MOBILE NUMBER */}
              <input
                type="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              {/* PRODUCT NAME */}
              <input
                type="text"
                name="product"
                value={form.product}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />


              {/* MESSAGE */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type here..."
                rows={4}
                className="w-full p-3 bg-white border border-gray-500 rounded-lg focus:border-[#FCB13B] outline-none"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-[#FCB13B] text-black font-semibold py-3 rounded-xl hover:scale-105 hover:text-white transition"
              >
                Send Now
              </button>

            </form>
          </div>

          {/* ================= RIGHT INFO (SAME UI) ================= */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 w-full">

            <p className="text-black/70 max-w-md text-sm sm:text-base leading-relaxed">
              We are here to help you with GPS tracking solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">Phone</p>
                  <p>+91 7041296455</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MdEmail className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">Email</p>
                  <p>support@latiyalgps.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaWhatsapp className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">WhatsApp</p>
                  <p>+91 7041296455</p>
                </div>
              </div>

              <div className="flex gap-3">
                <IoLocationSharp className="text-[#FCB13B]" />
                <div>
                  <p className="text-sm text-black/60">Office</p>
                  <p>Jaipur, Rajasthan</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}