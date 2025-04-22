import React from 'react';
import { PlayerRank } from '../types';

interface RankBadgeProps {
  rank: PlayerRank;
}

export const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => {
  const getRankColor = () => {
    switch (rank) {
      case 'VIP':
        return 'bg-green-100 text-green-800';
      case 'VIP+':
        return 'bg-green-200 text-green-800';
      case 'MVP':
        return 'bg-blue-100 text-blue-800';
      case 'MVP+':
        return 'bg-blue-200 text-blue-800';
      case 'ADMIN':
        return 'bg-red-100 text-red-800';
      case 'OWNER':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${getRankColor()}`}>
      {rank}
    </span>
  );
};