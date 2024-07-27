import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800">World Explorer</h2>
            <p className="text-sm text-gray-600">Discover the world, one country at a time.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link to="/china" className="text-gray-600 hover:text-gray-800">China</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} World Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
