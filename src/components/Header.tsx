import React from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">UnitedTraveller</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Flights</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Car Rental</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Packages</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
