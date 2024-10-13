import React from "react";
import HomeBG from "../assets/HomeBG.jpg";
import { CiCircleChevRight } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HomeBG}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-left text-white">
          PHARMACIST TRAINING, PHARMACY CONSULTATION, DOCUMENT ARCHIVING AND
          ETHICS COMMITTEE REGISTRATION SERVICES
        </h1>
        <button className="mt-20 w-56 h-16 font-semibold bg-blue-500 text-white px-4 py-2 rounded-md text-2xl">
          <span className="flex flex-row items-center justify-center gap-2">
            Get Started
            <CiCircleChevRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
