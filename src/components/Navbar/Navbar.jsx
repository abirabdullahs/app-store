import React from 'react';
import Logo from '../../assets/images/logo.png'; // adjust path
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
        
          {/* Left: Logo + Name */}
          <div className="flex items-center">
            <NavLink to ='/'><img src={Logo} alt="Logo" className="h-8 w-8 mr-2"/></NavLink>
            <span className="text-xl font-bold text-purple-600">HERO.IO</span>
          </div>
          
          {/* Center: Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/Apps'
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1' : ''}`
              }
            >
              Apps
            </NavLink>
            <NavLink
              to='/Installation'
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1' : ''}`
              }
            >
              Installation
            </NavLink>
          </nav>
          
          {/* Right: Contribute Button */}
          <div>
            <a
              href="https://github.com/abirabdullahs"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contribute
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
