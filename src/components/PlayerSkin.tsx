import React from 'react';

interface PlayerSkinProps {
  uuid: string;
  position: number;
}

export const PlayerSkin: React.FC<PlayerSkinProps> = ({ uuid, position }) => {
  // Get border color based on position
  const getBorderColor = () => {
    switch (position) {
      case 1:
        return "border-amber-500 shadow-amber-500/50";
      case 2:
        return "border-gray-400 shadow-gray-400/50";
      case 3:
        return "border-orange-700 shadow-orange-700/50";
      default:
        return "border-gray-600";
    }
  };

  return (
    <div 
      className={`w-10 h-10 rounded border-2 shadow-lg ${getBorderColor()} overflow-hidden transition-transform hover:scale-110`}
    >
      {/* In a real implementation, you would use the UUID to fetch the player's skin */}
      <img 
        src={`https://crafatar.com/avatars/${uuid}?overlay=true`} 
        alt="Player skin" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};