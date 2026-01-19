"use client";
import { useEffect, useRef, useState } from "react";

export default function ProgressLineZoom() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const TOTAL_DURATION = 5400;
  const STEP_DURATION = TOTAL_DURATION / 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);

          // step-by-step activation
          setTimeout(() => setActiveStep(1), 0);
          setTimeout(() => setActiveStep(2), STEP_DURATION);
          setTimeout(() => setActiveStep(3), STEP_DURATION * 2);
          setTimeout(() => setActiveStep(0), TOTAL_DURATION);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F6F2EA] py-15 flex justify-center"
    >
      <div className="max-w-6xl w-full px-6">
        {/* Responsive flex: column mobile, row desktop */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 ">

          {/* LINE (only desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/20 -translate-y-1/2 hidden lg:block">
            <div
              className={`h-full bg-black ${start ? "w-full" : "w-0"}`}
              style={{
                transition: `width ${TOTAL_DURATION}ms ease-out`,
              }}
            />
          </div>

          {/* STEP 1 */}
          <div
            className={`
              relative  border-2 border-[#262F6C] z-10 w-60 sm:w-72 md:w-80 lg:w-90 h-18
    bg-white rounded-2xl shadow-lg
              flex items-center font-montserrat font-semibold
              transition-transform duration-600 ease-in-out
              ${activeStep === 1 ? "scale-115" : "scale-100"}
            `}
          >
            <h2 className="rounded-full w-10 h-10 text-center justify-start mx-7 bg-[#FCB13B] pt-2">
              1
            </h2>
            <p>device in vehicle</p>
          </div>

          {/* STEP 2 */}
          <div
            className={`
              relative border-2 border-[#262F6C] z-10 w-60 sm:w-72 md:w-80 lg:w-90 h-18 bg-white rounded-2xl shadow-lg
              flex items-center font-montserrat font-semibold
              transition-transform duration-600 ease-in-out
              ${activeStep === 2 ? "scale-115" : "scale-100"}
            `}
          >
            <h2 className="bg-[#FCB13B] rounded-full w-10 h-10 text-center justify-start mx-7 pt-2">
              2
            </h2>
            <p>signel to satelite</p>
          </div>

          {/* STEP 3 */}
          <div
            className={`
              relative border-2 border-[#262F6C] z-10 w-60 sm:w-72 md:w-80 lg:w-90 h-18 bg-white rounded-2xl shadow-lg
              flex items-center font-montserrat font-semibold
              transition-transform duration-600 ease-in-out
              ${activeStep === 3 ? "scale-115" : "scale-100"}
            `}
          >
            <h2 className="bg-[#FCB13B] rounded-full w-10 h-10 text-center justify-start mx-7 pt-2">
              3
            </h2>
            <p>Live tracking</p>
          </div>

        </div>
      </div>
    </section>
  );
}
