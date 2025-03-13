import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Error = () => {
  return (
    
      <div className="text-center p-8 bg-white rounded-lg h-screen max-w-md mx-auto animate-fade-in">
        <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Sorry, the page you tried cannot be found
        </h3>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/" // Use the "to" prop to specify the route
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    
  );
};

export default Error;