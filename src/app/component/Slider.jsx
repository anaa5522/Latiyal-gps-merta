"use client";
import { useEffect, useRef, useState } from "react";

export default function Slider() {
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const [active, setActive] = useState(0);

  const items = [
    { id: 1, img: "imgi_140_9c27a963b2709df487d81ab4bc08d007.png", title: "99.9% Uptime" },
    { id: 2, img: "imgi_110_4c15a9b76fb269e21b445715a80a78ab.png", title: "Live Tracking" },
    { id: 3, img: "imgi_93_88356419c717c2c19e4c0dab71e21a1c.png", title: "Easy Setup" },
    { id: 4, img: "imgi_62_3aba2def1b9ec0363802a4b88c58e489.png", title: "Secure Data" },
    { id: 5, img: "imgi_140_9c27a963b2709df487d81ab4bc08d007.png", title: "99.9% Uptime" },
    { id: 6, img: "imgi_110_4c15a9b76fb269e21b445715a80a78ab.png", title: "Live Tracking" },
    { id: 7, img: "imgi_93_88356419c717c2c19e4c0dab71e21a1c.png", title: "Easy Setup" },
    { id: 8, img: "imgi_62_3aba2def1b9ec0363802a4b88c58e489.png", title: "Secure Data" },
  ];

  /* 🔁 AUTOSLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((active + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  /* 🎯 CENTER ALIGN SLIDE */
  const goToSlide = (index) => {
    const container = sliderRef.current;
    if (!container) return;

    const slide = container.children[index];
    if (!slide) return;

    const offset =
      slide.offsetLeft -
      container.offsetWidth / 2 +
      slide.offsetWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    setActive(index);
  };

  /* 🖱️ MOUSE DRAG */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.pageX - startX.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  /* 📱 TOUCH SWIPE */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const walk = (e.touches[0].pageX - startX.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section className="bg-[#F6F2EA] py-5">
      <div className="max-w-6xl mx-auto px-4">

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="min-w-full sm:min-w-[50%] lg:min-w-[20%] px-3"
            >
              <div className="relative bg-white rounded-2xl px-4 py-4 flex items-center gap-3 shadow-sm border border-black/5">

                <span className="absolute left-0 top-0 h-full w-[5px] bg-[#F5A623] rounded-l-2xl" />

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />

                <p className="text-[14px] md:text-[16px] font-semibold text-[#262F6C] whitespace-nowrap">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all ${
                active === i
                  ? "bg-[#F5A623] w-6"
                  : "bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
