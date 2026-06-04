"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      img: "/facebook.png",
      link: "https://www.facebook.com/latiyalgps/",
    },
    {
      name: "Instagram",
      img: "/instagram (1).png",
      link: "https://youtube.com/@latiyalgps?si=gXus6l5XESzGupHa",
    },
    {
      name: "LinkedIn",
      img: "/whatsapp.png",
      link: "https://linkedin.com",
    },
    {
      name: "Twitter",
      img: "/twitter.png",
      link: "https://x.com/latiyalgps",
    },

  ];

  return (
    <footer className="bg-[#000000] text-gray-300 select-none">
      <div className="max-w-7xl mx-auto px-6 py-15 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div >
          <img
            src="/Latiyal GPS logo 02.png"
            alt="Latiyal GPS"
            className="h-10 mb-4"
          />

          <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] text-white">
            Advanced GPS solutions for real-time vehicle tracking, fleet
            management, and enhanced security across industries.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:ml-20">
          <h3 className="font-montserrat font-semibold text-[17px] leading-[21.3px] text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-white">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/aboutus" },
              { name: "Services", link: "/servicepage" },
              { name: "Product", link: "/product" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="font-montserrat font-light text-[13.3px] leading-[21.3px] hover:text-[#FCB13B] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className=" inter font-montserrat font-semibold text-[17px] leading-[21.3px] text-white mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-white">


            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-white" />
              <span>support@latiyalgps.com</span>
            </li>

            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-white" />
              <span>+91 7041296455</span>
            </li>
            <li className="font-montserrat font-light text-[13.3px] leading-[21.3px] flex  gap-3 items-start">
              <FaMapMarkerAlt className="text-white  mx-1" size={40} />
              <span >  PLOT No. SA-04, NARAYAN SAGAR-ABC, NEAR SAATHI TEXTILES, NARAYAN VIHAR, JAIPUR, Jaipur, Rajasthan, 302020</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-montserrat font-semibold text-[17px] leading-[21.3px] text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:scale-110 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />

              </a>

            ))}

          </div>
          <div className="mt-10">© {new Date().getFullYear()} Latiyal GPS. All rights reserved.</div>
        </div>

      </div>


    </footer>
  );
}