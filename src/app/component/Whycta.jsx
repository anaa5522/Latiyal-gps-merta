"use client"
import React from 'react'

export default function Whycta() {
  return (
    <div className="w-full bg-white">

      {/* WHY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              WHY LATIYAL GPS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Businesses and Governments Choose Latiyal GPS
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Trusted across Rajasthan for fleet tracking, compliance, and smart mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Rajasthan-Based. Field-Tested.</h3>
              <p className="text-gray-600">
                Operating from Jaipur, we understand mining, transport, and municipal operations across Rajasthan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">Government Approved</h3>
              <p className="text-gray-600">
                AIS 140-certified VLTD devices fully compliant with RTO and government regulations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-gray-600">
                Installation, maintenance, and support — our team stays with you at every step.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Data You Can Act On</h3>
              <p className="text-gray-600">
                Convert tracking data into actionable insights to reduce cost and improve safety.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 border rounded-3xl shadow-sm hover:shadow-xl transition md:col-span-2">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Built for Every Scale</h3>
              <p className="text-gray-600">
                From 5 vehicles to 500+, our system scales with your business without complexity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform How Your Fleet Operates?
          </h2>

          <p className="text-lg md:text-xl text-orange-100 mb-10">
            Get a free consultation and discover the right tracking solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <a
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:scale-105 transition"
            >
              Get a Free Consultation
            </a>

            <a
              href="tel:+919999999999"
              className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Call Us Now
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
