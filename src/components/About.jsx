import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover the story behind our love for authentic, delicious parathas.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-lg w-full"
              src="https://images.unsplash.com/photo-1625201244820-e74914c1d25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhcmF0aGF8ZW58MHx8fHwxNjU3OTQ2MjE3&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Delicious Parathas"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to <span className="font-semibold text-orange-600">Desi Dough</span>, where every bite is a journey to the heart of Indian cuisine. 
              We specialize in crafting the most delectable and authentic parathas, prepared with love and the finest ingredients. 
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From classic aloo parathas to innovative stuffed varieties, our mission is to bring you the comfort of home-cooked flavors 
              with a touch of creativity. We believe in quality, tradition, and the joy of sharing a delicious meal with loved ones.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            At Desi Dough, our mission is simple: to bring the taste of India's most beloved comfort food to your table. 
            We are committed to serving freshly prepared, mouthwatering parathas made with the highest quality ingredients 
            and delivered with love and care. Whether you're dining in or ordering for a cozy meal at home, we're here to 
            make every meal memorable.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic mb-4">
                "The best parathas I've ever had! The flavors are authentic, and the quality is unmatched."
              </p>
              <h4 className="text-lg font-bold text-gray-800">- Anjali K.</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic mb-4">
                "Desi Dough reminds me of my grandma's cooking. I can’t wait to try all the varieties!"
              </p>
              <h4 className="text-lg font-bold text-gray-800">- Ramesh P.</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic mb-4">
                "Amazing food and excellent service. The perfect place for comfort food lovers!"
              </p>
              <h4 className="text-lg font-bold text-gray-800">- Priya S.</h4>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Savor the Best Parathas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit us or place an order online today and experience the joy of authentic Indian flavors.
          </p>
          <Link to={"/"} className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Explore Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
