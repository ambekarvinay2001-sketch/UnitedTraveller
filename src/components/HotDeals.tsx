import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { faker } from '@faker-js/faker';

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
  deal: string;
}

const HotDeals: React.FC = () => {
  const hotels: Hotel[] = Array.from({ length: 8 }, (_, i) => ({
    id: faker.string.uuid(),
    name: faker.company.name() + ' Hotel',
    location: faker.location.city() + ', ' + faker.location.country(),
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    price: Number((Math.random() * 200 + 80).toFixed(0)),
    originalPrice: Number((Math.random() * 300 + 150).toFixed(0)),
    image: `https://picsum.photos/400/300?random=${i}`,
    deal: Math.random() > 0.5 ? 'Free Cancellation' : 'Limited Time'
  }));

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hot hotel deals right now
          </h2>
          <p className="text-xl text-gray-600">
            Hurry! These deals won't last long
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {hotel.deal}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate">
                  {hotel.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm truncate">{hotel.location}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{hotel.rating}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">
                      ${hotel.originalPrice}
                    </span>
                    <div className="text-2xl font-bold text-green-600">
                      ${hotel.price}
                    </div>
                    <span className="text-sm text-gray-600">per night</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
