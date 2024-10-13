import React from "react";
import logo from "../assets/logo1.png";
import { CiCircleChevDown } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-2 bg-transparent text-white p-4 absolute w-full z-10">
      <div className="text-lg font-bold flex items-center justify-center h-24">
        <img src={logo} alt="logo" className="h-24" />
        <h1 className="text-2xl font-bold">Benten-Pharmasphere</h1>
      </div>
      <div className="flex flex-row justify-center items-center font-semibold text-xl space-x-8 relative">
        <a href="#" className="hover:text-teal-400">
          Home
        </a>
        <a href="#" className="hover:text-teal-400">
          About
        </a>
        <div className="relative group">
          <button className="hover:text-teal-400"><span className="flex flex-row justify-center items-center gap-2">Services <CiCircleChevDown /></span></button>
          <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 space-y-2 rounded shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
            <a href="#" className="block hover:text-teal-400">
              Service 1
            </a>
            <a href="#" className="block hover:text-teal-400">
              Service 2
            </a>
            <a href="#" className="block hover:text-teal-400">
              Service 3
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-teal-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
