"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function History() {
  const stats = [
    { value: 50000, label: "Vehicles Tracked" },
    { value: 20000, label: "Happy Customers" },
    { value: 15, label: "Countries Served" },
    { value: 99.9, label: "System Uptime" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full">
      <section className="bg-[url('/b5f199aa7a24dda0c0fe888747c7efac.jpg')] bg-cover bg-center text-white py-16 md:py-24">

        {/* HEADING */}
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-5xl mb-4">
            <span className="text-[#FCB13B]">O</span>ur Impact
          </h1>

          <p className="font-montserrat font-light text-[13px] leading-[20px] max-w-2xl mx-auto opacity-90">
            Driving innovation, improving safety, and transforming fleet
            management through smart GPS solutions.
          </p>
        </div>

        {/* STATS – NO WRAP, NO SCROLL */}
        <div
          ref={ref}
          className="max-w-7xl mx-auto px-4 py-10 flex flex-nowrap justify-between items-center gap-3"
        >
          {stats.map((item, index) => (
            <div key={index} className="text-center flex-1">

              <h3 className="font-inter font-semibold text-[18px] sm:text-[22px] md:text-[28px] whitespace-nowrap">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    separator=","
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  0
                )}
                {item.label === "System Uptime" && "%"}
              </h3>

              <p className="font-montserrat font-light text-[10px] sm:text-[12px] md:text-[13.3px] leading-[16px] md:leading-[21.3px] whitespace-nowrap mt-1">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
