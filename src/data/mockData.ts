import { Player } from '../types';

const generateMockUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const countryCodes = ['us', 'gb', 'ca', 'au', 'br', 'de', 'fr', 'jp', 'ru', 'cn', 'mx', 'es', 'it', 'nl', 'se', 'kr', 'in', 'za', 'ar', 'cl', 'pt', 'be', 'ch', 'at', 'dk', 'fi', 'no', 'pl', 'ua', 'gr', 'ie', 'nz', 'sg', 'hk', 'tw', 'th', 'vn', 'my', 'ph', 'id', 'tr', 'il', 'sa', 'ae', 'eg', 'ng', 'ke', 'co', 'pe', 've', 'uy', 'py', 'bo', 'ec', 'cr', 'pa', 'do', 'cu', 'al', 'dz', 'ad', 'ao', 'ag', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'bz', 'bj', 'bt', 'ba', 'bw', 'bn', 'bg', 'bf', 'bi', 'cv', 'kh', 'cm', 'ky', 'cf', 'td', 'km', 'cg', 'cd', 'hr', 'cy', 'cz', 'dj', 'dm', 'sv', 'gq', 'ee', 'sz', 'et', 'fj', 'ga', 'gm', 'ge', 'gh', 'gd', 'gt', 'gn', 'gw', 'gy', 'ht', 'hn', 'hu', 'is', 'iq', 'ir', 'jm', 'jo', 'kz', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mg', 'mw', 'mv', 'ml', 'mt', 'mh', 'mr', 'mu', 'fm', 'md', 'mc', 'mn', 'me', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'ni', 'ne', 'mk', 'om', 'pk', 'pw', 'pg', 'qa', 'ro', 'rw', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sn', 'rs', 'sc', 'sl', 'sk', 'si', 'sb', 'so', 'lk', 'sd', 'sr', 'sy', 'tj', 'tz', 'tl', 'tg', 'to', 'tt', 'tn', 'tm', 'tv', 'ug', 'uz', 'vu', 'va', 'ye', 'zm', 'zw', 'ax', 'ai', 'aq', 'aw', 'bm', 'bq', 'bv', 'io', 'vg', 'gf', 'pf', 'tf', 'gg', 'gi', 'gp', 'gu', 'hm', 'je', 'ki', 'xk', 'mo', 'mq', 'yt', 'ms', 'nc', 'nu', 'nf', 'mp', 'ps', 'pn', 'pr', 're', 'bl', 'mf', 'pm', 'sh', 'lc', 'vc', 'sm', 'st', 'sj', 'tc', 'vi', 'wf', 'eh'];
const ranks = ['Default', 'VIP', 'VIP+', 'MVP', 'MVP+', 'ADMIN', 'OWNER'];

export const mockPlayers: Player[] = Array.from({ length: 30 }, (_, i) => {
  const position = i + 1;
  const multiplier = position <= 3 ? (4 - position) * 2 : 1;
  
  return {
    id: `player-${i + 1}`,
    uuid: generateMockUUID(),
    name: `Player${i + 1}`,
    country: countryCodes[Math.floor(Math.random() * countryCodes.length)],
    rank: ranks[Math.floor(Math.random() * ranks.length)] as Player['rank'],
    kills: Math.floor(Math.random() * 1000 * multiplier) + 100,
    deaths: Math.floor(Math.random() * 500 * multiplier) + 50,
    elo: Math.floor(Math.random() * 2000 * multiplier) + 1000,
    position: position
  };
});

mockPlayers[0].name = "Notch";
mockPlayers[0].rank = "OWNER";
mockPlayers[1].name = "Dream";
mockPlayers[1].rank = "MVP+";
mockPlayers[2].name = "Technoblade";
mockPlayers[2].rank = "MVP+";