import React from 'react';
import { Smartphone, QrCode } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the UnitedTraveller app
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book hotels on the go and get exclusive mobile-only deals. Download now and save up to 25% more!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <span>📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <span>🤖</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="h-12 w-12 text-gray-800" />
              </div>
              <div>
                <p className="text-sm text-blue-100">
                  Scan QR code to download
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-32 w-32 text-gray-300" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
