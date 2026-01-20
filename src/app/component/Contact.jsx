import React from "react";

export default function Contact() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[url('/4c9bc507bd6c4bda4cd5b60222c092c7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-4xl md:text-6xl font-serif text-white">Contact Us</h1>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-serif mb-6"><spam className='text-[#FCB13B]'>G</spam>et in Touch with Our Team</h2>
          <p className="text-gray-600 mb-10 text-md">
            We’re here to help you with reliable and smart GPS tracking solutions.
            Whether you need real-time vehicle monitoring, fleet management, or technical support — our team is ready to assist you.
          </p>

          <ul className="space-y-4 text-md">
            <li className="flex items-center gap-3">
              <span className="text-yellow-500">📍</span>
              Jaipur, Rajasthan, India
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-500">📞</span>
              995074321
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-500">✉️</span>
              latiyal@gmail.com
            </li>
          </ul>
        </div>

        {/* Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-3" />
          <input type="text" placeholder="Subject" className="w-full border rounded-lg px-4 py-3" />
          <textarea placeholder="Message" className="w-full border rounded-lg px-4 py-3 h-32"></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-white py-3 rounded-full font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
          >
            BOOK NOW
          </button>
        </form>
      </section>

      {/* Map Section */}

      <section className="w-full h-[400px]">
        <iframe
          title="Jodhpur Map"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228975.0356777817!2d72.86538324028224!3d26.270264922033075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1768923308931!5m2!1sen!2sin"
        ></iframe>
      </section>


      {/* CTA Section */}
      <section className="relative py-24  px-4 bg-[url('/ee679e37341f536297e1fd7454c00e69.jpg')] bg-cover bg-center text-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-2xl mx-auto text-white">
          <h2 className="text-4xl font-serif mb-4">
           Power Your Vehicles with Intelligent GPS Tracking 
          </h2>
          <p className="text-gray-200 mb-8">
            Monitor, manage, and protect your vehicles with real-time tracking and smart analytics — anytime, anywhere.
          </p>
          <button className="bg-white text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-500  hover:bg-yellow-600 bg-yellow-500">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
}
