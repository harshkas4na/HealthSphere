import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">HealthSphere</a>
          </div>

          {/* Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
              <li><a href="/aboutUs" className="text-white hover:text-gray-200">About Us</a></li>
              <li><a href="/communities" className="text-white hover:text-gray-200">Communities</a></li>
              <li><a href="/diseaseAwareness" className="text-white hover:text-gray-200">DiseaseAwareness</a></li>
              
              <li><a href="/login" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">Login</a></li>
              <li><a href="/signup" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">Signup</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
