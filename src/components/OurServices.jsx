import React from "react";

const OurServices = () => {
  return (
    <div className="bg-white flex flex-wrap">
    <div className="px-6 py-10 w-full lg:w-[50%] bg-gradient-to-br from-yellow-100 to-orange-100 font-bold flex justify-center items-center">
      <img
        src="https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2022/02/Sattu-Paratha-2.jpg?resize=684%2C1024&ssl=1"
        alt="Delicious Paratha"
        className="h-72 rounded-lg shadow-lg animate-spin-slow"
      />
    </div>
    <div className="px-6 py-10 w-full lg:w-[50%] bg-gradient-to-br from-orange-100 to-yellow-100">
      <h1 className="text-5xl font-bold text-orange-600 my-3">Our Services</h1>
      <p className="text-gray-700 my-2 font-thin">
        Welcome to Desi Dough, where every paratha tells a story of tradition
        and taste!
      </p>
      <p className="text-gray-700 my-2 font-thin">
        We take pride in handcrafting our parathas, using only the freshest
        ingredients and time-honored recipes that have been passed down
        through generations!
      </p>
      <ul className="text-gray-700 my-5 text-sm font-thin list-disc pl-5">
        <li>Fast Delivery</li>
        <li>Eco-Friendly Packaging</li>
        <li>Best Taste</li>
      </ul>
      <a href="#Menu" className="bg-orange-400 font-bold text-white p-3 rounded-md my-5 hover:bg-orange-300 transition-all duration-200">
        Order Now
      </a>
    </div>
  </div>
  
  );
};

export default OurServices;
