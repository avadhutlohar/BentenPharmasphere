import React from "react";
import bgImage from "../assets/about-bg-img.jpg";

const ContactUs = () => {
  return (
    <section
      id="about"
      className="py-16 bg-cover bg-center relative mb-36"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute  inset-0 bg-black bg-opacity-50"></div>
      <div className="container  mt-64 mx-auto px-4 relative">
       
       <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
       
       
      </div>
    </section>
  );
};

export default ContactUs;
