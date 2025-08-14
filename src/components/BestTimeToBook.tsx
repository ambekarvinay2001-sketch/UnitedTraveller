import React, { useState } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const BestTimeToBook: React.FC = () => {
  const [activeCity, setActiveCity] = useState('New York');
  
  const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Dubai'];
  
  const priceData = {
    'New York': [180, 165, 145, 160, 185, 220, 250, 240, 200, 170, 155, 175],
    'London': [140, 125, 115, 130, 155, 190, 210, 200, 170, 145, 125, 140],
    'Paris': [160, 145, 125, 140, 165, 200, 230, 220, 180, 155, 135, 155],
    'Tokyo': [220, 200, 180, 195, 220, 260, 290, 280, 240, 210, 185, 205],
    'Sydney': [200, 180, 160, 175, 200, 240, 270, 260, 220, 190, 165, 185],
    'Dubai': [250, 230, 200, 220, 245, 280, 310, 300, 260, 235, 205, 225]
  };
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const currentCityData = priceData[activeCity as keyof typeof priceData];
  const minPrice = Math.min(...currentCityData);
  const maxPrice = Math.max(...currentCityData);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best time to book
          </h2>
          <p className="text-xl text-gray-600">
            Find the cheapest months to visit your favorite destinations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCity === city
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Average prices in {activeCity}
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">Cheapest: ${minPrice}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-red-600">Most expensive: ${maxPrice}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-2">
            {months.map((month, index) => {
              const price = currentCityData[index];
              const isLowest = price === minPrice;
              const isHighest = price === maxPrice;
              const percentage = ((price - minPrice) / (maxPrice - minPrice)) * 100;
              
              return (
                <div key={month} className="text-center">
                  <div className="mb-2">
                    <div
                      className={`rounded-lg p-4 transition-all ${
                        isLowest ? 'bg-green-500 text-white' :
                        isHighest ? 'bg-red-500 text-white' :
                        'bg-blue-100 text-blue-900'
                      }`}
                      style={{
                        opacity: isLowest || isHighest ? 1 : 0.6 + (percentage / 100) * 0.4
                      }}
                    >
                      <div className="text-lg font-bold">${price}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTimeToBook;
