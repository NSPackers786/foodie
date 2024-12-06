import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-500 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Foodie</h1>

        {/* Mobile Hamburger Icon */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full bg-red-500 lg:bg-transparent lg:w-auto lg:flex-row lg:space-x-6`}
        >
          <li>
            <a
              href="#home"
              className="block px-4 py-2 text-center hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="block px-4 py-2 text-center hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 text-center hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
