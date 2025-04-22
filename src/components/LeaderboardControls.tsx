import React from 'react';
import { Search } from 'lucide-react';
import { countries } from '../data/countries';
import { GameMode } from '../types';

interface LeaderboardControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  countryFilter: string;
  setCountryFilter: (country: string) => void;
  sortBy: 'kills' | 'deaths' | 'elo';
  setSortBy: (sortBy: 'kills' | 'deaths' | 'elo') => void;
  activeMode: GameMode;
  setActiveMode: (mode: GameMode) => void;
}

const toApiGameMode = (mode: string): GameMode => {
  const map: Record<string, GameMode> = {
    Practice: 'PRACTICE',
    KitMap: 'KIT_MAP',
    Leagues: 'LEAGUES',
    Bunkers: 'BUNKERS',
    Soup: 'SOUP',
  };

  return map[mode] ?? 'PRACTICE';
};

export const LeaderboardControls: React.FC<LeaderboardControlsProps> = ({
  searchQuery,
  setSearchQuery,
  countryFilter,
  setCountryFilter,
  sortBy,
  setSortBy,
  activeMode,
  setActiveMode
}) => {
  // Los valores del modo ahora deben ser en mayúsculas, como los espera el tipo `GameMode`
  const modes: GameMode[] = ['PRACTICE', 'KIT_MAP', 'LEAGUES', 'BUNKERS', 'SOUP'];

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMode = e.target.value;
    setActiveMode(toApiGameMode(selectedMode)); // Aquí usamos la función para convertir a mayúsculas
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 mb-8 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-red-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search player..."
              className="bg-white/50 w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <select
              value={activeMode}
              onChange={handleModeChange} // Cambia al valor correcto
              className="bg-white/50 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300"
            >
              {modes.map((mode) => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="bg-white/50 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          
          {activeMode === 'PRACTICE' ? ( // Usa 'PRACTICE' aquí porque ahora es el valor correcto
            <div className="flex-1">
              <button
                onClick={() => setSortBy('elo')}
                className="w-full py-3 px-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all duration-300"
              >
                Sort by ELO
              </button>
            </div>
          ) : (
            <div className="flex-1">
              <div className="flex rounded-xl overflow-hidden border-2 border-gray-200">
                <button
                  onClick={() => setSortBy('kills')}
                  className={`flex-1 py-3 transition-all duration-300 ${
                    sortBy === 'kills' ? 'bg-red-500 text-white' : 'bg-white/50 text-gray-700 hover:bg-red-50'
                  }`}
                >
                  Kills
                </button>
                <button
                  onClick={() => setSortBy('deaths')}
                  className={`flex-1 py-3 transition-all duration-300 ${
                    sortBy === 'deaths' ? 'bg-red-500 text-white' : 'bg-white/50 text-gray-700 hover:bg-red-50'
                  }`}
                >
                  Deaths
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
