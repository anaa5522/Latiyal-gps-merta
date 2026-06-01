"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTruck,
  FaLandmark,
  FaCheckCircle,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

export default function Govservice() {
  return (
    <div className="bg-[#F6F2EA] overflow-hidden">

      {/* HERO */}
      <section className="bg-[#0F172A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
                AIS 140 VLTD
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
                Stay Compliant.
                <span className="text-orange-400"> Stay Ahead.</span>
              </h1>

              <p className="text-xl text-gray-300 mt-6">
                Government-certified Vehicle Location Tracking Devices (VLTD)
                installed and supported by experts.
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Latiyal GPS is an authorised supplier and installer of AIS
                140-certified VLTD devices helping commercial vehicle owners
                maintain full compliance with Government regulations while
                ensuring smooth operations.
              </p>

              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold">
                Get Compliance Support
              </button>
            </div>

            <div>
              <img
                src="/fleet_city_highway.png"
                alt="AIS 140 VLTD"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="font-semibold text-[#0F172A]">
              ✓ Government Approved
            </div>

            <div className="font-semibold text-[#0F172A]">
              ✓ AIS 140 Certified
            </div>

            <div className="font-semibold text-[#0F172A]">
              ✓ Mining Compliance
            </div>

            <div className="font-semibold text-[#0F172A]">
              ✓ RTO Integration
            </div>

          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FaShieldAlt className="text-6xl text-orange-500 mx-auto mb-6" />

          <h2 className="text-4xl font-bold text-[#0F172A]">
            Complete AIS 140 Compliance Solution
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We manage everything from certified device supply and professional
            installation to government portal integration, compliance
            documentation, and ongoing technical support.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Mining */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

              <FaTruck className="text-5xl text-orange-500 mb-6" />

              <span className="text-orange-500 font-semibold">
                Rajasthan Mining
              </span>

              <h3 className="text-3xl font-bold text-[#0F172A] mt-3">
                Compliant Tracking for Every Mining Vehicle
              </h3>

              <p className="text-gray-600 mt-5">
                End-to-end AIS 140 compliance solutions tailored for Rajasthan
                mining operations and mineral transport vehicles.
              </p>

              <ul className="mt-6 space-y-4">
                <li>✔ Certified AIS 140 Installation</li>
                <li>✔ Mining Department Integration</li>
                <li>✔ Real-Time Regulatory Tracking</li>
                <li>✔ Compliance Documentation</li>
                <li>✔ Technical Support</li>
              </ul>

            </div>

            {/* RTO */}
            <div className="bg-[#0F172A] text-white rounded-3xl shadow-xl p-10">

              <FaLandmark className="text-5xl text-orange-400 mb-6" />

              <span className="text-orange-400 font-semibold">
                RTO Compliance
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Certified VLTD for RTO Compliance
              </h3>

              <p className="text-gray-300 mt-5">
                Complete support for Rajasthan RTO and multi-state compliance
                requirements.
              </p>

              <ul className="mt-6 space-y-4 text-gray-300">
                <li>✔ Government Approved VLTD</li>
                <li>✔ RTO Registration Support</li>
                <li>✔ Multi-State Compliance</li>
                <li>✔ Warranty & Service Support</li>
                <li>✔ Dedicated Technical Helpline</li>
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-16">
            Simple Compliance Process
          </h2>

          <div className="grid md:grid-cols-5 gap-8 text-center">

            <div>
              <FaCheckCircle className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3>Device Supply</h3>
            </div>

            <div>
              <FaTools className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3>Installation</h3>
            </div>

            <div>
              <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3>Integration</h3>
            </div>

            <div>
              <FaCheckCircle className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3>Approval</h3>
            </div>

            <div>
              <FaHeadset className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3>Support</h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            Get Your Vehicle AIS 140 Compliant Today
          </h2>

          <p className="text-white/90 mt-6 text-lg">
            Fast installation, government-approved devices, and complete
            compliance support.
          </p>

          <button className="mt-8 bg-white text-orange-500 px-10 py-4 rounded-xl font-bold">
            Contact Us Now
          </button>

        </div>
      </section>

    </div>
  );
}