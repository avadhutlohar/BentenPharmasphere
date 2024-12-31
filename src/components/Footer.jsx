import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-100 py-12">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-8">
          
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
          {/* Address Section */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <p className="text-sm">Mumbai,</p>
            <p className="text-sm">Maharashtra India</p>
          </div>
          {/* Phone Section */}
          {/* <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-2xl mb-2" />
            <p className="text-sm">+91 12345 39879</p>
            <p className="text-sm">+91 12345 99855</p>
          </div> */}
          {/* Email Section */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl mb-2" />
            <p className="text-sm">bentenpharma@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
