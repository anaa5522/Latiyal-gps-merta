"use client";
import Image from "next/image";

export default function App() {
  return (
    <section className="w-full bg-[#F6F2EA] py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div className="order-1 bg-white rounded-xl p-6 sm:p-12 md:p-20">
          <h2 className="text-4xl font-serif text-[#000000] leading-tight w-full break-words">
            The solution to your <br className="hidden sm:block" /> parking problems
          </h2>

          <p className="mt-4 text-[13px] text-[#383838] max-w-full text-xs sm:text-base break-words py-2">
            We understand that finding a parking space can be a challenge for many.
            Our app addresses this problem with these three essential features.
          </p>

          <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
            {[
              "Well-organized information",
              "Google Maps integration",
              "Integration with car sensors",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#383838] text-sm sm:text-base break-words">
                <span className="w-4 h-4 sm:w-6 sm:h-6 flex py-2 items-center justify-center rounded-full bg-[#000000] text-white text-xs sm:text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button className="
    group relative overflow-hidden
    px-4 mt-10 sm:px-7 py-2.5 sm:py-3
    rounded-xl
    border border-[#FCB13B]
    bg-[#FCB13B]
    font-semibold tracking-wide
    text-black whitespace-nowrap

    transition-all duration-300 ease-out

    hover:text-black
    hover:-translate-y-1
    hover:scale-[1.03]
    hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)]

    active:bg-[#FCB13B]
    active:text-black
    active:shadow-[0_8px_18px_rgba(252,177,59,0.35)]
    active:scale-[0.96]
  ">

    {/* SLIDING BRAND GRADIENT */}
    <span className="
      absolute inset-0
      bg-gradient-to-r from-[#FCB13B] to-[#FF9F1C]
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-700 ease-out
    " />

    {/* CONTENT */}
    <span className="relative z-10 flex items-center gap-2">
      Contact Us
      <span className="
        transition-transform duration-300
        group-hover:translate-x-1
      ">
        ➜
      </span>
    </span>
  </button>




        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="order-2 relative flex justify-center items-center mt-4 lg:mt-0">

          {/* SCREEN MASK */}
          <div
            className="
              absolute
              top-[3px]
              left-1/2
              -translate-x-1/2
              w-[190px] sm:w-[230px] md:w-[265px]
              h-[350px] sm:h-[434px] md:h-[520px]
              rounded-[28px]
              overflow-hidden
              z-0
            "
          >
            <img
              src="remove all text from.png"
              alt="App Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IPHONE FRAME */}
          <img
            src="imgi_676_white-smartphone-mockup-blank-screen-isolated-on-transparent-background-smartphone-mockup-frame-free-png.png"
            alt="iPhone Frame"
            className="w-[200px] sm:w-[230px] md:w-[280px] relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
