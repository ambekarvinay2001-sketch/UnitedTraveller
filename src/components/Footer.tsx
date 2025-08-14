import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const popularSearches = [
    'Hotels in New York', 'Hotels in London', 'Hotels in Paris', 'Hotels in Dubai',
    'Hotels in Tokyo', 'Hotels in Sydney', 'Hotels in Bangkok', 'Hotels in Rome',
    'Hotels in Barcelona', 'Hotels in Amsterdam', 'Hotels in Berlin', 'Hotels in Vienna'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy',
    'Australia', 'Canada', 'Japan', 'Brazil', 'India', 'China'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Hotel Searches</h3>
            <ul className="space-y-2">
              {popularSearches.slice(0, 6).map((search, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {search}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">International Sites</h3>
            <ul className="space-y-2">
              {countries.slice(0, 6).map((country, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    UnitedTraveller {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-blue-400">UnitedTraveller</span>
              <span className="text-sm text-gray-400">© 2025 UnitedTraveller. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
