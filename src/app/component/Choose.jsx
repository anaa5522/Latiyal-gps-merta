"use client";

export default function Choose() {
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

  return (
    <section className="bg-[#F6F2EA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#000000] text-center py-10">
                        <span className="text-[#FCB13B]">W</span>hy Choose Us
                    </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {cards.map((item, i) => (
            <div
              key={i}
              className=" hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(252,177,59,0.45)] transition-all duration-500
                bg-white
                rounded-2xl
                px-8
                py-10
                text-center
                
              "
            >
              {/* ICON */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-[#262F6C] font-bold text-2xl mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[#383838] text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 