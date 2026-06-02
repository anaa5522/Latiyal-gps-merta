"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Smartcity() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA] py-24 lg:py-32">
      {/* Background Effects */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Label */}
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-black text-white font-medium text-sm shadow-lg">
              Camera & IoT Installation
            </span>

            {/* Headline */}
            <h1 className=" inter text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#0F172A]">
              Delivering Government
              <br />
              Infrastructure Projects —
              <span className="text-">
                {" "}On Time, On Spec.
              </span>
            </h1>

            {/* Subheadline */}
            <p className=" inter text-xl md:text-2xl text-gray-700 font-medium max-w-2xl">
              Reliable supply and professional installation of cameras and IoT
              equipment for government-tendered projects.
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              Latiyal GPS brings its proven technical expertise and large-scale
              field experience to government infrastructure projects involving
              camera surveillance and IoT equipment deployment.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              From smart city projects to transport hubs and public safety
              infrastructure, we offer end-to-end execution — from planning
              and procurement to installation, integration, and post-project
              support.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              We understand the documentation standards, compliance
              requirements, and accountability expectations that government
              projects demand. Our team delivers within scope, on schedule,
              and to specification — every time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-black  text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Request Consultation
                </button>
              </Link>

              <Link href="/services">
                <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition-all duration-300">
                  View Projects
                </button>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="hidden md:block"> <div className="flex  flex-wrap gap-4 pt-4 ">
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Smart City Projects
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Government Tenders
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                IoT Deployment
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#0F172A]">
                Public Safety Infrastructure
              </span>
            </div></div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -inset-4  rounded-[40px]" />

            <img
              src="/a4e8145c3c9da714672cd0cc4c32c320.jpg"
              alt="Camera & IoT Installation"
              className="relative w-full rounded-[35px] shadow-2xl"
            />
          </motion.div>

        </div>
      </div>


      {/* second section */}
      <section className="py-24  overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className=""
            >
              <img
                src="/116088858012227677dd6237a9073e59.jpg"
                alt="Government Project Execution"
                className="w-full h-[250px] lg:h-[700px] object-cover rounded-[32px] shadow-2xl"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
                Our Capabilities
              </span>

              <h2 className=" inter text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                End-to-End Government Project Execution
              </h2>

              <p className="text-gray-600 mb-8 text-lg">
                Complete project execution services covering procurement,
                installation, integration, commissioning, and long-term support
                for government surveillance and IoT infrastructure projects.
              </p>

              <div className="space-y-4">

                {/* First 6 Features */}
                <div className="grid md:grid-cols-2 gap-4">

                  {[
                    "Supply of CCTV, PTZ, IP & Dome Cameras",
                    "IoT Device Procurement & Deployment",
                    "Network Configuration & Integration",
                    "Central Monitoring Platform Connectivity",
                    "Planning, Commissioning & Handover",
                    "Technical Manpower Deployment",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Index Dot */}
                      <div className=" w-2 h-2 hidden md:block rounded-full bg-white flex-shrink-0"></div>



                      <h3 className="text-white font-medium leading-snug">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Last Feature Full Width */}
                <div className="flex items-center gap-4 p-5 bg-black rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  {/* Index Dot */}
                  <div className=" w-2 h-2 hidden md:block rounded-full bg-white flex-shrink-0"></div>

                  <h3 className="text-white font-medium">
                    Annual Maintenance Contracts (AMC)
                  </h3>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6  text-center">
          
          <h2 className=" inter inline-block px-6 py-4 bg-[#FCB13A] text-black rounded-full text-md font-semibold mb-7">
               AIS 140 Installation Process
              </h2>
          {/* <h2 className="text-md   rounded-2xl font-bold  text-black py-2 mb-10 lg:mb-20">
            AIS 140 Installation Process
          </h2> */}

          <div className="relative">

            {/* Main Line */}
            <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-1 bg-[#FCB13A] -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">

              {[
                "Requirement Analysis",
                "Device Supply",
                "Professional Installation",
                "Government Integration",
                "Compliance Activation",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  {/* Number Circle */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FCB13A] text-black text-xl font-bold flex items-center justify-center shadow-lg border-4 border-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <div className=" mt-6 bg-white rounded-3xl p-6 h-[180px] flex flex-col justify-center shadow-md hover:shadow-xl transition-all duration-300">
                    <h3 className=" inter text-lg font-bold text-black text-center">
                      {step}
                    </h3>

                    <p className="text-black text-sm text-center mt-3">
                      Complete professional execution with compliance support.
                    </p>
                  </div>

                  {/* Arrow Between Steps */}
                  {index !== 4 && (
                    <div className="hidden lg:flex absolute top-8 -right-8 items-center z-20">
                      <div className="w-10 h-1 bg-[#FCB13A]"></div>
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#FCB13A]"></div>
                    </div>
                  )}
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <section className="py-16 lg:py-24">

  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

    <span className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold">
      Ideal For
    </span>

    <h2 className=" inter text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-6 leading-tight">
      Built for Public Infrastructure Projects
    </h2>

    <p className="text-black text-base sm:text-lg mt-6 max-w-4xl mx-auto leading-relaxed">
      Smart city initiatives, state transport authorities, public safety
      infrastructure, command and control centres, and government-tendered
      IoT deployment projects.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16">

      {[
        "Smart Cities",
        "Transport Authorities",
        "Public Safety",
        "Government IoT Projects",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#FCB13A] rounded-2xl lg:rounded-3xl p-5 lg:p-8 text-black font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300"
        >
          {item}
        </div>
      ))}

    </div>

  </div>

</section>
    </section>
  );
}