import React from 'react';
import { Search, Shield, DollarSign } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Search simply',
      description: 'Compare millions of hotel deals from hundreds of booking sites with just one search.'
    },
    {
      icon: Shield,
      title: 'Compare confidently',
      description: 'We show you transparent pricing and verified reviews so you can book with confidence.'
    },
    {
      icon: DollarSign,
      title: 'Save big',
      description: 'Find the lowest prices and exclusive deals that you won\'t find anywhere else.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
