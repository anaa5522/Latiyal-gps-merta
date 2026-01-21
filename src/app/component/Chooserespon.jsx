"use client";
import { useRef } from "react";

export default function Chooserepon() {
  const sliderRef = useRef(null);

  const cards = [
    {
      title: "INNOVATE",
      desc: "We unlock new possibilities by delivering fresh, innovative solutions to seamlessly integrate telematics into your business operations.",
      icon: "🧠",
    },
    {
      title: "OPTIMISE",
      desc: "We maximize efficiency by streamlining operations, reducing costs, and boosting performance with smart telematics solutions.",
      icon: "⚙️",
    },
    {
      title: "DELIVER",
      desc: "We ensure consistent value by providing reliable telematics solutions that meet your business goals and drive real-world results.",
      icon: "📦",
    },
    {
      title: "16+ YEARS",
      desc: "Effectively meeting customer needs with innovative Telematics and IoT solutions across diverse industries.",
      icon: "🏆",
    },
    {
      title: "3.5+ MILLION",
      desc: "Telematics and IoT devices deployed to enhance safety, simplify lives, and drive business efficiency.",
      icon: "📡",
    },
    {
      title: "2500+",
      desc: "Global customers rely on our trusted Telematics and IoT solutions for efficiency, safety, and performance.",
      icon: "🌍",
    },
  ];

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F6F2EA] py-7">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000]">
            <span className="text-[#FCB13B]">W</span>HY CHOOSE US ?
          </h2>

         
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            scrollbar-hide
            pb-4
          "
        >
          {cards.map((item, i) => (
            <div
              key={i}
              className="
                min-w-[100%]
                sm:min-w-[48%]
                lg:min-w-[32%]
                bg-white
                rounded-2xl
                px-8
                py-10
                text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-[#262F6C] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-[#383838] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
