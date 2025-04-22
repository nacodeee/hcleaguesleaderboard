import React, { useEffect, useState } from 'react';
import { PlayerEntry } from './PlayerEntry';
import { Player, GameMode } from '../types';
import { fetchPlayerStats } from '../api.ts';

//  Helper para convertir el modo al formato que espera la API
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

interface LeaderboardTableProps {
  gameMode: string
  searchQuery: string;
  countryFilter: string;
  sortBy: 'kills' | 'deaths' | 'elo';
}

const profileIds = [
  '5b27947c-c316-42e3-bbe7-6eb5fa8fdf90',
  // Podés sumar más perfiles si los tenés
];

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  gameMode,
  searchQuery,
  countryFilter,
  sortBy
}) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const fetchedPlayers = await Promise.all(
        profileIds.map((id) => fetchPlayerStats(id, toApiGameMode(gameMode)))
      );

      let filtered = fetchedPlayers.filter((p): p is Player => p !== null);

      if (searchQuery) {
        filtered = filtered.filter(player =>
          player.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (countryFilter) {
        filtered = filtered.filter(player =>
          player.country === countryFilter
        );
      }

      filtered.sort((a, b) => (b[sortBy] ?? 0) - (a[sortBy] ?? 0));

      filtered = filtered.map((player, index) => ({
        ...player,
        position: index + 1
      }));

      setPlayers(filtered);
    };

    loadPlayers();
  }, [gameMode, searchQuery, countryFilter, sortBy]);

  if (players.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg">No players found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody className="space-y-4">
          {players.map((player) => (
            <PlayerEntry key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
