import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { CiCircleChevDown } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-2 bg-transparent text-white p-4 absolute w-full z-10">
      <div className="text-lg font-bold flex items-center justify-center h-24">
        <Link to="/">
          <img src={logo} alt="logo" className="h-24" />
        </Link>
        <Link to="/" className="text-2xl font-bold">
          Benten-Pharmasphere
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center font-semibold text-xl space-x-8 relative">
        <Link to="/" className="hover:text-teal-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-teal-400">
          About
        </Link>
        <div className="relative group">
          <button className="hover:text-teal-400">
            <span className="flex flex-row justify-center items-center gap-2">
              Services <CiCircleChevDown />
            </span>
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 space-y-2 rounded-lg shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 border border-teal-400">
            <Link to="/services/service1" className="block px-4 py-2 hover:bg-teal-400 hover:text-white rounded-md transition-all">
              Hospital Pharmacy Set up
            </Link>
            <Link to="/services/service2" className="block px-4 py-2 hover:bg-teal-400 hover:text-white rounded-md transition-all">
              Ethics Committee services 
            </Link>
            <Link to="/services/service3" className="block px-4 py-2 hover:bg-teal-400 hover:text-white rounded-md transition-all">
              Documents Archiving services
            </Link>
          </div>
        </div>
        <Link to="/contact" className="hover:text-teal-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
