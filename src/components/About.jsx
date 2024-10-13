import React from "react";
import bgImage from "../assets/about-bg-img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-cover bg-center relative mb-36"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute  inset-0 bg-black bg-opacity-50"></div>
      <div className="container  mt-64 mx-auto px-4 relative">
       <div className="absolute -mt-20">
       <h2 className="text-3xl font-bold text-center text-white mb-12">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Who Are We */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Who Are We</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We have the vision to be a full-service provider for Ethics
              Committee Registrations & Approvals and to provide high-quality
              clinical trial management services.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Ethics Committee Registration</li>
              <li>DHR Registration</li>
              <li>OHRP Registration</li>
              <li>NAC SCRT</li>
              <li>Clinical Trials Management</li>
            </ul>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default About;
