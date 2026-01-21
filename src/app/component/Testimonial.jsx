"use client";
import { useRef } from "react";

export default function Testimonial() {
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const testimonials = [
    {
      name: "Rajesh Patel",
      city: "Mumbai",
      image: "121950523b28efbce9568e1f568d871e.jpg",
      review:
        "Latiyal GPS se hamare fleet ki efficiency 30% badh gayi hai. Accurate tracking aur alerts bahut hi help karte hain.",
    },
    {
      name: "Anjali Sharma",
      city: "Delhi",
      image: "121950523b28efbce9568e1f568d871e.jpg",
      review:
        "Latiyal GPS ne meri gadi mein real-time tracking aur geofencing set up bahut asaan bana diya. Highly recommend!",
    },
    {
      name: "Vikram Singh",
      city: "Jaipur",
      image: "121950523b28efbce9568e1f568d871e.jpg",
      review:
        "Hamare fleet management ke liye Latiyal GPS best hai. Inki quality aur 24/7 support ne sab asaan bana diya.",
    },
    {
      name: "Rajesh Patel",
      city: "Mumbai",
      image: "f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Latiyal GPS se hamare fleet ki efficiency 30% badh gayi hai. Accurate tracking aur alerts bahut hi help karte hain.",
    },
    {
      name: "Anjali Sharma",
      city: "Delhi",
      image: "121950523b28efbce9568e1f568d871e.jpg",
      review:
        "Latiyal GPS ne meri gadi mein real-time tracking aur geofencing set up bahut asaan bana diya. Highly recommend!",
    },
    {
      name: "Vikram Singh",
      city: "Jaipur",
      image: "f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Hamare fleet management ke liye Latiyal GPS best hai. Inki quality aur 24/7 support ne sab asaan bana diya.",
    },
  ];

  /* 🖱️ MOUSE DRAG */
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.pageX - startX.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  /* 📱 TOUCH SWIPE */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const walk = (e.touches[0].pageX - startX.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section className="bg-[#F6F2EA] py-7">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#000]">
          What Our Customers Say
        </h2>

        <p className="text-center text-[#383838] mt-3 mb-14">
          Trusted by vehicle owners, fleet managers & businesses across India.
        </p>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[40%] lg:min-w-[30%] px-3 py-10"
            >
              <div className="bg-white rounded-2xl px-8 pt-14 pb-8 text-center relative shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

                {/* IMAGE */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>

                <h3 className="mt-6 font-bold text-lg text-[#262F6C]">
                  {item.name}
                </h3>
                <p className="text-sm text-[#383838]">{item.city}</p>

                <div className="flex justify-center gap-1 text-[#FCB13B] mt-3">
                  ★★★★★
                </div>

                <p className="text-[#383838] text-sm mt-4 leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
