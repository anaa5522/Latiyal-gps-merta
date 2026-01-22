"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F6F2EA] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <img
            src="/Latiyal Logo Final.png"
            alt="Latiyal GPS"
            className="h-10 mb-4"
          />
  
          
          <p className="text-sm text-black leading-relaxed">
            Advanced GPS solutions for real-time vehicle tracking, fleet
            management, and enhanced security across industries.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-black font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-black">
            {["Home", "Features", "Pricing", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-black transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-black font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-black mt-1" />
              <span>123 GPS Street, Tech City</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-black text-black" />
              <span>info@latiyalgps.com</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-black" />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-black font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10 py-6 text-center text-sm text-white bg-[#1A1A1A]">
        © {new Date().getFullYear()} Latiyal GPS. All rights reserved.
      </div>
    </footer>
  );
}
