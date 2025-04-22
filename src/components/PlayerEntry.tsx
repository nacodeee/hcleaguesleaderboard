import React from 'react';
import { Player } from '../types';
import { PlayerSkin } from './PlayerSkin';
import { CountryFlag } from './CountryFlag';
import { RankBadge } from './RankBadge';

interface PlayerEntryProps {
  player: Player;
}

export const PlayerEntry: React.FC<PlayerEntryProps> = ({ player }) => {
  const getPositionStyling = () => {
    switch (player.position) {
      case 1:
        return "border-amber-500 shadow-amber-500/20";
      case 2:
        return "border-gray-500 shadow-gray-400/20";
      case 3:
        return "border-orange-800 shadow-orange-700/20";
      default:
        return "border-white-100 shadow-red-500/5";
    }
  };

  return (
    <tr 
      className={`mb-4 transition-all duration-300 hover:scale-[1.00] hover:-translate-y-1 group`}
    >
      <td colSpan={4} className="p-1">
        <div 
          className={`bg-white/20 backdrop-blur-sm rounded-xl border-2 ${getPositionStyling()} shadow-lg overflow-hidden`}
          style={{ 
            backgroundImage: 'url(https://i.imgur.com/7MVhhri.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="flex items-center p-4 text-white">
            <div className="w-16 text-center font-bold text-2xl">
              #{player.position}
            </div>
            <div className="flex-1 flex items-center">
              <div className="mr-4">
                <PlayerSkin uuid={player.uuid} position={player.position} />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-bold text-lg mr-2">{player.name}</span>
                  <CountryFlag countryCode={player.country} />
                </div>
                <RankBadge rank={player.rank} />
              </div>
            </div>
            {player.gameMode === 'Practice' ? (
              <div className="text-right font-bold text-xl">
                {player.elo.toLocaleString()} ELO
              </div>
            ) : (
              <div className="text-right">
                <div className="font-bold text-xl">{player.kills.toLocaleString()} Kills</div>
                <div className="text-white/80">{player.deaths.toLocaleString()} Deaths</div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};