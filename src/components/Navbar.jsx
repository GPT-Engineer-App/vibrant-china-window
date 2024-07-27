import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800">World Explorer</Link>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                <Button variant="ghost" className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
