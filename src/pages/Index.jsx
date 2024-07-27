import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)]"> {/* Adjust for navbar and footer height */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our World Explorer</h1>
        <p className="mb-6">Discover fascinating information about countries around the globe.</p>
        <Link to="/china">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Explore China 🇨🇳
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
