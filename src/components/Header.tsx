import React from 'react';
import { Copy, Disc as Discord } from 'lucide-react';

export const Header: React.FC = () => {
  const copyServerAddress = () => {
    navigator.clipboard.writeText('play.hcleagues.org');
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="https://hcleagues.org/discord" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <Discord className="w-5 h-5 mr-2" />
            Join Discord
          </a>

          <img 
            src="https://i.imgur.com/Y23q2Y4.png" 
            alt="HCLeagues Logo" 
            className="h-20 transform hover:scale-105 transition-transform duration-300" 
          />

          <button
            onClick={copyServerAddress}
            className="flex items-center px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <Copy className="w-5 h-5 mr-2" />
            Copy Address
          </button>
        </div>
      </div>
    </header>
  );
};