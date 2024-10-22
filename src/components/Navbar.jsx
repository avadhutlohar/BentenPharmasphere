import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { CiCircleChevDown } from "react-icons/ci";

const Navbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-transparent z-10">
      <div className="text-2xl font-bold">BentenPharmasphere</div>
      <ul className="hidden md:flex space-x-8">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li className="relative">
          <button 
            onClick={toggleDropdown} 
            className="flex items-center hover:text-blue-600"
          >
            Services <CiCircleChevDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <li><Link to="/services/hospital" className="block px-4 py-2 hover:bg-gray-200">Hospital Pharmacy Services</Link></li>
              <li><Link to="/services/ethics" className="block px-4 py-2 hover:bg-gray-200">Ethics Committee Services</Link></li>
              <li><Link to="/services/archiving" className="block px-4 py-2 hover:bg-gray-200">Documents Archiving Services</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;