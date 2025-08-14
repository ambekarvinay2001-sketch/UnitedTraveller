import React from 'react';
import { MapPin } from 'lucide-react';

interface Destination {
  name: string;
  country: string;
  hotels: number;
  avgPrice: number;
  image: string;
}

const PopularDestinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      name: 'Dubai',
      country: 'UAE',
      hotels: 2847,
      avgPrice: 165,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500'
    },
    {
      name: 'New York',
      country: 'USA',
      hotels: 3921,
      avgPrice: 185,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500'
    },
    {
      name: 'London',
      country: 'UK',
      hotels: 2156,
      avgPrice: 145,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500'
    },
    {
      name: 'Paris',
      country: 'France',
      hotels: 1834,
      avgPrice: 155,
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500'
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      hotels: 2674,
      avgPrice: 220,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500'
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      hotels: 1567,
      avgPrice: 95,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover the world's most loved travel destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.country}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">
                    {destination.hotels.toLocaleString()} hotels
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">from</p>
                  <p className="text-xl font-bold text-green-600">
                    ${destination.avgPrice}
                  </p>
                  <p className="text-sm text-gray-600">per night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
