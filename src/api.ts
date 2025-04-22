import { GameMode } from './types';

export interface PlayerStats {
  id: string;
  name: string;
  kills: number;
  deaths: number;
  elo?: number;
  country: string;
}

const API_KEY = '1c6e5039-e31f-4f77-afd1-ad52f13d2b81';

export async function fetchPlayerStats(
  profileId: string,
  gameMode: GameMode
): Promise<PlayerStats | null> {
  try {
    const res = await fetch(`http://91.134.96.82:8000/api/v2/profiles/${profileId}/statistics`, {
      headers: {
        'F-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Error ${res.status}`);

    const data = await res.json();
    const stats = data.value.statistics[gameMode];

    if (!stats) return null;

    return {
      id: profileId,
      name: data.value.name ?? 'Unknown',
      kills: stats.kills ?? 0,
      deaths: stats.deaths ?? 0,
      elo: stats.elo ?? undefined,
      country: data.value.country ?? 'Unknown',
    };
  } catch (err) {
    console.error(`Error al obtener stats de ${profileId}:`, err);
    return null;
  }
}
