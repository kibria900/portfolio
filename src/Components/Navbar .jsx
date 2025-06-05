import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Kibria</div>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMenu}></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 text-sm font-medium">
          <a href="#home" className="block hover:text-blue-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-blue-400" onClick={toggleMenu}>About</a>
          <a href="#skills" className="block hover:text-blue-400" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="block hover:text-blue-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-blue-400" onClick={toggleMenu}>Contact</a>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

    
    </>
  );
};

export default Navbar;
