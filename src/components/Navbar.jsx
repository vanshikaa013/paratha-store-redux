import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-gradient-to-br from-yellow-100 to-orange-100 shadow-lg p-5 flex justify-between items-center">
    <span className="flex items-center gap-2">
      <img src="" alt="Logo" className="w-[8%]" />
      <Link to={"/"} className="text-2xl font-bold text-orange-600">Paratha-store</Link>
    </span>
    <span className="flex space-x-6 text-gray-700">
      <Link to={"/"} className="font-semibold hover:text-orange-500">Home</Link>
      <Link to={"/about"} className="font-semibold hover:text-orange-500">About</Link>
      <Link to={"/contact"} className="font-semibold hover:text-orange-500">Contact</Link>
    </span>
    <div>
      <Link to={"/cart"}>
        <BsCart3 className="text-xl text-gray-700 hover:text-orange-500" />
      </Link>
    </div>
  </nav>
  
  );
};

export default Navbar;
