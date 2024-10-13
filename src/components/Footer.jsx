// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-500 text-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <h2 className="text-2xl font-bold mb-6">Let's Get in Touch</h2>
            <p className="font-semibold mb-2">Headquarters, Pune – IN</p>
            <p className="text-sm text-gray-400">X-404 Sr, No-45 Cluster B-4, Akruti Countrywoods, Tilekar Nagar, Kondhwa (B), Pune-411048</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaGoogle /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400">About</a></li>
              <li><a href="#" className="hover:text-teal-400">FAQs</a></li>
              <li><a href="#" className="hover:text-teal-400">Services</a></li>
              <li><a href="#" className="hover:text-teal-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400">Services</a></li>
            </ul>
          </div>

          {/* Duplicate Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400">Home</a></li>
              <li><a href="#" className="hover:text-teal-400">About</a></li>
              <li><a href="#" className="hover:text-teal-400">Services</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-12">
          <p>Copyright © 2024 ICER | Designed with <span className="text-red-500">❤️</span> by Turtle Digital LLP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
