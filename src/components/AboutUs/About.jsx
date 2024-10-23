import React from "react";
import aboutImage from "../../assets/about1.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-white h-screen mb-48"
    >
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-full">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            About Us
          </h2>
          <div className="flex flex-col justify-between space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
            {/* Card 1 */}
            <div className="bg-transparent rounded-lg shadow-md p-4 md:p-6 lg:p-8 xl:p-10 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500 hover:text-blue-500">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600">
                Our vision is to offer comprehensive support to hospitals,
                clinical research organizations and deliver exceptional training
                for pharmacists and college students. We are dedicated to
                advancing excellence in pharmacy practice and education.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-transparent rounded-lg shadow-md p-4 md:p-6 lg:p-8 xl:p-10 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500 hover:text-blue-500">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4">
                What We Do
              </h3>
              <ul className="list-disc text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 pl-4 md:pl-6 lg:pl-8 xl:pl-10">
                <li>Hospital Pharmacy Set up</li>
                <li>Training of hospital pharmacists</li>
                <li>Pharmacy consultation</li>
                <li>Clinical training of hospital pharmacists</li>
                <li>Ethics Committee registration and renewal</li>
                <li>Documents Archiving</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center md:justify-end md:mt-0 lg:mt-0 xl:mt-0 p-4 md:p-6 lg:p-8 xl:p-10">
          <img
            src={aboutImage}
            alt="Doctor Illustration"
            className="h-full w-full md:h-3/4 md:w-3/4 lg:h-3/4 lg:w-3/4 xl:h-full xl:w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;