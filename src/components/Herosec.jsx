import React from "react";
// import { Link } from "react-router-dom";
import Paratha from "../assets/parathaImage.png"

const Herosec = () => {
  return (
    <div className="bg-white flex flex-wrap">
  <div className="px-6 py-10 w-full lg:w-[50%] bg-gradient-to-br from-orange-100 to-yellow-100 font-bold">
    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight my-3">
      "Layers of Flavor, <br /> Crafted with{" "}
      <span className="text-5xl lg:text-6xl font-bold text-orange-500">
        paratha
      </span>"
    </h1>
    <p className="font-thin text-gray-700 my-4">
      Welcome to paratha-store, where tradition meets flavor in every bite! Our
      paratha store celebrates the art of crafting authentic, delicious
      parathas that transport you straight to the heart of homemade,
      comforting meals.
    </p>
    <p className="text-gray-700 font-thin my-4">
      Each paratha is carefully prepared with fresh, high-quality ingredients
      and a variety of mouth-watering fillings, from classic aloo and paneer to
      exciting fusion flavors.
    </p>
    <a href="#Menu" className="bg-orange-400 font-bold text-white py-3 px-6 rounded-md my-4 hover:bg-orange-300 transition-all duration-200">
      Order Now
    </a>
  </div>
  <div className="p-4 py-10 w-full lg:w-[50%] bg-gradient-to-br from-yellow-100 to-orange-100 flex justify-center items-center">
  <img
    src={Paratha}
    alt="Delicious Paratha"
    className="h-72 rounded-lg shadow-lg animate-spin-slow"
  />
</div>

</div>

  );
};

export default Herosec;
