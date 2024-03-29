import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's a user in local storage
    const retrievedUser = JSON.parse(localStorage.getItem('user'));
    console.log(retrievedUser);
    // If there's a user, set userLoggedIn to true
    if (retrievedUser) {
      setUserLoggedIn(true);
    } else {
      // Otherwise, set it to false
      setUserLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.setItem('user', JSON.stringify(null));
    // Set userLoggedIn to false
    setUserLoggedIn(false);
    console.log("Logged out");
    console.log(userLoggedIn); // This will log false
  };

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
              
              {userLoggedIn ? (
                // If user is logged in, show logout button
                <li><span className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer" onClick={handleLogout}>Logout</span></li>
              ) : (
                // If user is not logged in, show login and signup buttons
                <>
                  {console.log("User not logged in", userLoggedIn)}
                  <li><a href="/login" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">Login</a></li>
                  <li><a href="/signup" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">Signup</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
