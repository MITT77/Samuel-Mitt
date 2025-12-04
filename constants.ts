import { Player, PlayerStats } from './types';

export const PLAYERS: Player[] = [
  {
    id: 1,
    name: "Luka Dončić",
    position: "G (Armador / Ala-Armador)",
    height: "2,03 m",
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png"
  },
  {
    id: 2,
    name: "Austin Reaves",
    position: "G (Armador / Escolta)",
    height: "1,96 m",
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png"
  },
  {
    id: 3,
    name: "LeBron James",
    position: "F (Ala / Ala-Forte)",
    height: "2,06 m",
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
  }
];

// Mock stats for visualization
export const MOCK_STATS: PlayerStats[] = [
  { name: "Luka", ppg: 33.9, rpg: 9.2, apg: 9.8 },
  { name: "Austin", ppg: 15.9, rpg: 4.3, apg: 5.5 },
  { name: "LeBron", ppg: 25.7, rpg: 7.3, apg: 8.3 },
];

export const HERO_IMAGE = "https://static2.gensler.com/uploads/hero_element/20363/thumb_desktop/thumbs/project-crypto-com-arena-06-2000x1125_1661879638_1024x576.jpg";