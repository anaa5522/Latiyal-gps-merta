"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F6F2EA] py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <img className=" font-bold mb-4 text-[#262F6C] w-23 h-9" src="Latiyal Logo Final.png" alt="logo"/>
          <p className="text-sm text-[#383838]">
            Advanced GPS solution for real-time vehicle tracking across industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[#262F6C]">Quick Links</h3>
          <ul className="space-y-2 text-[#000000]">
            <li><a href="#" className="hover:text-[#FCB13B]">Home</a></li>
            <li><a href="#" className="hover:text-[#FCB13B]">Features</a></li>
            <li><a href="#" className="hover:text-[#FCB13B]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#FCB13B]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-[#262F6C]">Contact</h3>
          <p className="text-sm text-[#000000]">123 GPS Street, Tech City</p>
          <p className="text-sm text-[#000000]">Email: info@latiyalgps.com</p>
          <p className="text-sm text-[#000000]">Phone: +91 9876543210</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-[#262F6C]">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-[#FCB13B] rounded-full hover:bg-yellow-400"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-[#FCB13B] rounded-full hover:bg-yellow-400"><FaInstagram /></a>
            <a href="#" className="p-2 bg-[#FCB13B] rounded-full hover:bg-yellow-400"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-[#FCB13B] rounded-full hover:bg-yellow-400"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-[#000000] text-sm">
        &copy; {new Date().getFullYear()} Latiyal GPS. All rights reserved.
      </div>
    </footer>
  );
}
