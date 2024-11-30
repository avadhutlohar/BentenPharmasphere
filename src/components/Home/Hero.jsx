import React from "react";
import heroImage3 from "../../assets/abc3.png";

const Hero = ({ onScrollToImageSection }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-white min-h-screen py-10 md:py-20 px-6 md:px-8">
      {/* Left Column - Text */}
      <div className="md:w-2/3 text-center md:text-left">
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
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-lg md:px-8 md:py-4"
        >
          Start your journey with us today
        </button>
      </div>

      {/* Right Column - Illustration */}
      <div className="md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src={heroImage3}
          alt="Doctor Illustration"
          className="w-full md:w-[90%] lg:w-full max-h-[80vh] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;