"use client";

export default function History() {
  return (
    <section className="w-full bg-[#F6F2EA] to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          
          {/* Left */}
          <div>
            <p className="text-sm text-[#FCB13B] mb-3 tracking-widest uppercase font-semibold">
              Our Impact
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              Growing GPS Services Rapidly in the Market
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-gray-600 text-lg">
              We are expanding our strong presence and delivering reliable GPS
              tracking solutions to customers with trust and performance.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-[#FCB13B] text-black rounded-full font-semibold hover:scale-105 transition">
                View Services
              </button>

              <button className="px-6 py-3 border border-black rounded-full font-semibold hover:bg-black text-black hover:text-white transition">
                Contact Now
              </button>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-black/10 pt-12">

          {/* Item 1 */}
          <div className="border-r border-black/10 pr-6">
            <h3 className="text-4xl font-bold text-black">50+</h3>
            <p className="mt-4 font-semibold text-black">Happy Clients</p>
            <p className="text-gray-600 text-sm mt-2">
              Trusted customers using our GPS solutions.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-r border-black/10 pr-6">
            <h3 className="text-4xl font-bold text-black">100%</h3>
            <p className="mt-4 font-semibold text-black">Accuracy Rate</p>
            <p className="text-gray-600 text-sm mt-2">
              Ensuring precise tracking and data reliability.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-r border-black/10 pr-6">
            <h3 className="text-4xl font-bold text-black">24/7</h3>
            <p className="mt-4 font-semibold text-black">Support</p>
            <p className="text-gray-600 text-sm mt-2">
              Always available for your tracking needs.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-4xl font-bold text-black">2+</h3>
            <p className="mt-4 font-semibold text-black">Years Experience</p>
            <p className="text-gray-600 text-sm mt-2">
              Delivering GPS services with proven expertise.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}