export interface Player {
  id: number;
  name: string;
  position: string;
  height: string;
  imageUrl: string;
}

export interface PlayerStats {
  name: string;
  ppg: number; // Points Per Game
  rpg: number; // Rebounds Per Game
  apg: number; // Assists Per Game
}