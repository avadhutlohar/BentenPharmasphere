import React from 'react';
import heroImage3 from "../../assets/heroImg3.png";

const Hero = ({ onScrollToImageSection }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-pink-50 to-white h-screen py-10 md:py-20 px-6 md:px-8">
      {/* Left Column - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Welcome to <br />
          <span className="text-blue-600">Benten Pharmasphere</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          Your premier portal for comprehensive hospital services and pharmacist
          training. We focus on enhancing hospital pharmacy practices and
          professional development through specialized training programs for
          pharmacists, college students, and healthcare institutions. Join us to
          enhance your skills, stay ahead in your field, and make a meaningful
          impact in healthcare.
        </p>
        <button
          onClick={onScrollToImageSection} // Call the scroll function
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md md:px-6 md:py-3"
        >
          Start your journey with us today
        </button>
      </div>

      {/* Right Column - Illustration */}
      <div className="md:w-1/2 flex justify-center md:justify-end md:mt-0">
        <img src={heroImage3} alt="Doctor Illustration" className="w-[60%] md:w-[70%] lg:w-[100%]" />
      </div>
    </section>
  );
};

export default Hero;