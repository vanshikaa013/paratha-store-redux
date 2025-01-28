import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 to-orange-400 text-gray-800 py-10 px-5 ">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
    {/* Logo and Description */}
    <div className="mb-6 md:mb-0 text-center md:text-left">
      <span className="flex items-center justify-center md:justify-start gap-2">
        <img className="w-[10%] md:w-[5%]" src={logo} alt="Logo" />
        <h2 className="text-2xl font-bold text-orange-600">Paratha Store</h2>
      </span>
      <p className="text-gray-700 mt-2 w-[100%] md:w-[60%]">
        Serving the finest hand-rolled parathas, made with love and the freshest ingredients. Taste the tradition!
      </p>
    </div>

    {/* Footer Links */}
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-gray-600">
      <a href="/about" className="hover:text-orange-500">About Us</a>
      <a href="#Menu" className="hover:text-orange-500">Menu</a>
      <a href="/contact" className="hover:text-orange-500">Contact</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex gap-4 mt-6 md:mt-0 text-xl justify-center md:justify-start">
      <a target="blank" href="https://www.linkedin.com/in/vanshika-upadhyay-06abb827b/" className="text-gray-600 hover:text-orange-500">
        <CiLinkedin />
      </a>
      <a href="https://github.com/vanshikaa013" target="blank" className="text-gray-600 hover:text-orange-500">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com/" target="blank" className="text-gray-600 hover:text-orange-500">
        <FaYoutube />
      </a>
    </div>
  </div>

  {/* Footer Bottom Text */}
  <div className="mt-8 text-center text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} Desi Dough. All rights reserved.</p>
    <p>Designed with ❤️ by Paratha Store</p>
  </div>
</footer>

  )
}

export default Footer