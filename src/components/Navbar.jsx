import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiCircleChevDown } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".services-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "#",
      subItems: [
        { name: "Hospital Pharmacy Services", path: "/services/hospital" },
        { name: "Ethics Committee Services", path: "/services/ethics" },
        { name: "Documents Archiving Services", path: "/services/archiving" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white z-20 relative">
      <div className="text-2xl font-bold">
        <Link to="/">BentenPharmasphere</Link>
      </div>
      {!isLargeScreen && (
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      )}
      <ul
        className={`${
          isLargeScreen
            ? "flex space-x-8"
            : `absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index} className={isLargeScreen ? "" : "border-b border-gray-200"}>
            {item.subItems ? (
              <div className="services-dropdown relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center hover:text-blue-600 py-2 px-4 w-full"
                >
                  {item.name} <CiCircleChevDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <ul className={`${isLargeScreen ? "absolute left-0 mt-2 w-48" : ""} bg-white shadow-lg rounded-md`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;