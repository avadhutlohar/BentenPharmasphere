import React from "react";
import aboutImage from "../../assets/3.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-white min-h-screen"
    >
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-full">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            About Us
          </h2>
          <div className="flex flex-col justify-between space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8 lg:p-10 xl:p-12 transition duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-base md:text-lg lg:text-lg xl:text-xl text-gray-700">
                Our vision is to offer comprehensive support to hospitals,
                clinical research organizations and deliver exceptional training
                for pharmacists. We are dedicated to advancing excellence in
                pharmacy practice and education.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8 lg:p-10 xl:p-12 transition duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 text-gray-800">
                What We Do
              </h3>
              <ul className="list-disc text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 pl-4 md:pl-6 lg:pl-8 xl:pl-10">
                <li>Hospital pharmacists training and development</li>
                <li>Statutory compliance evaluation and audit in hospitals</li>
                <li>Pharmacy setup and consultation</li>
                <li>Clinical training of hospital pharmacists</li>
                <li>
                  Advisory and guidelines for Ethics Committee:
                  <ul className="list-disc pl-8">
                    <li>Formation and setup</li>
                    <li>Registration and renewal</li>
                    <li>Protocols and regulations relevant to CDSCO and DHR</li>
                    <li>SOP development</li>
                    <li>GCP Training for Ethics Committee members</li>
                  </ul>
                </li>
                <li>Documents Archiving</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center p-4 md:p-6 lg:p-8 xl:p-10">
          <img
            src={aboutImage}
            alt="Doctor Illustration"
            className="h-auto w-full md:w-3/4 lg:w-3/4 xl:w-full max-h-[75vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;