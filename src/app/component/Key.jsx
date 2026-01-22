"use client";
import Image from "next/image";

export default function Key() {
  const items = [
    "ROBUST DEVICES",
    "STABLE & ACCURATE DATA",
    "EDGE PROCESSING & DIAGNOSTICS",
    "REMOTE ECU PROVISIONING",
    "DEAD RECKONING",
    "CLOUD MOBILITY PLATFORM",
  ];

  return (
    <section className="w-full bg-[#F6F2EA] py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden md:block flex-1 border-t border-[#383838]/40" />
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-black text-center">
            <span className="text-[#FCB13B]">K</span>ey Feature
          </h2>
          <div className="hidden md:block flex-1 border-t border-[#383838]/40" />
        </div>

        <p className="text-center text-[#383838] text-md sm:text-sm md:text-lg mb-10">
          Advance GPS Solution for real time vehicle tracking
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-start ">
            <img
              src="imgi_162_DSC03431-scaled.jpg"
              alt="GPS Device"
              className="w-[260px] sm:w-[320px] md:w-[420px] rounded-xl shadow-lg"
            />
          </div>

          {/* FEATURES */}
          <div className="relative ">

            {/* DESKTOP */}
            <div className="hidden md:block space-y-5 ">
              {items.map((text, index) => (
                <div key={index} className="relative flex items-center  hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)] transition-all duration-500">

                  {/* <span className="hidden lg:block absolute -left-28 w-24 h-[2px] bg-[#383838]/40" /> */}

                  <div className="w-full bg-white rounded-xl  px-6 py-5
                    flex items-center gap-4
                    hover:shadow-xl hover:scale-[1.02]
                    transition-all duration-300">

                    <span className="w-10 h-10 flex items-center justify-center
                      rounded-lg bg-[#F0B100] text-black font-bold">
                      {index + 1}
                    </span>

                    <p className="text-black font-semibold">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE – UNIQUE TIMELINE DESIGN */}
            <div className="md:hidden relative space-y-5">

          

              {items.map((text, index) => (
                <div key={index} className="relative flex gap-4 pl-10">

                  <span className="
                    absolute left-0 top-3
                    w-8 h-8
                    flex items-center justify-center
                    rounded-full
                    bg-[#FCB13B]
                    text-black text-sm font-bold
                    shadow-md
                  ">
                    {index + 1}
                  </span>

                  <div className="
                    w-full
                    bg-white 
                    rounded-xl
                    px-4 py-4
                    shadow-md
                    border border-[#FCB13B]/20
                    transition-all duration-300
                    active:scale-[0.97]
                  ">
                    <p className="text-black text-sm font-semibold leading-snug">
                      {text}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
