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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Contact Us
            </motion.h1>
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