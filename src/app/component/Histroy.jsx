"use client";

export default function Histroy() {
  const stats = [
    {
      title: "27+ YEARS",
      desc: "Effectively meeting customer needs with innovative IoT solutions",
    },
    {
      title: "35+ MILLION",
      desc: "IoT devices deployed to make people lives easier and safer",
    },
    {
      title: "26 COUNTRIES",
      desc: "With local offices around the globe, we are close to our clients",
    },
  ];

  return (
    <section className="bg-[#F6F2EA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              {/* NUMBER */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#262F6C]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-[#383838] max-w-xs mx-auto leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
