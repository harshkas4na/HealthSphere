

import React from 'react';
import Navbar from './Navbar';

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Oops! You're not logged in</h1>
      <p className="text-gray-600 mb-4">Please log in or create an account to access this page.</p>
      {/* Add buttons or links to log in and sign up pages */}
    </div>
    </>
  );
}

export default ErrorPage;
