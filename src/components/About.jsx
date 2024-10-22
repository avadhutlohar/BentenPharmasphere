import React from 'react';
import bgImage from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="h-screen py-16 relative">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{ zIndex: -1 }} // Ensure the image is behind the content
      />
      <div className="container mx-auto px-8 h-full flex justify-start items-center">
        <div className="bg-transparent rounded-lg shadow-lg overflow-hidden w-1/2 p-8">
          <h2 className="text-6xl font-bold text-center mb-12">About Us</h2>
          <div className="flex flex-col space-y-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                Our vision is to offer comprehensive support to hospitals, clinical research organizations and deliver exceptional training for pharmacists and college students. We are dedicated to advancing excellence in pharmacy practice and education.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <ul className="list-disc text-lg text-gray-600 pl-8">
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
      </div>
    </section>
  );
};

export default About;