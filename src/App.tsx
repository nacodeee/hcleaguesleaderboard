import React, { useState } from 'react';
import { Header } from './components/Header';
import { LeaderboardControls } from './components/LeaderboardControls';
import { LeaderboardTable } from './components/LeaderboardTable';
import { GameMode } from './types';

function App() {
  const [activeMode, setActiveMode] = useState<GameMode>('Practice');
  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [sortBy, setSortBy] = useState<'kills' | 'deaths' | 'elo'>('elo');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <LeaderboardControls 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
        />
        
        <LeaderboardTable 
          gameMode={activeMode}
          searchQuery={searchQuery}
          countryFilter={countryFilter}
          sortBy={sortBy}
        />
      </main>
      <footer className="bg-gray-100 py-4 text-center text-gray-600 border-t border-gray-200">
        <p>© 2025 HCLeagues - hcleagues.org</p>
      </footer>
    </div>
  );
}

export default App;