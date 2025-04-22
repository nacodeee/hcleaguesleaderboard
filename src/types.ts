export type GameMode = 'PRACTICE' | 'KIT_MAP' | 'LEAGUES' | 'BUNKERS' | 'SOUP';

export type PlayerRank = 'Default' | 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'ADMIN' | 'OWNER';

export interface Player {
  id: string;
  uuid: string;
  name: string;
  country: string;
  rank: PlayerRank;
  kills: number;
  deaths: number;
  elo: number;
  position: number;
  gameMode?: GameMode;
}