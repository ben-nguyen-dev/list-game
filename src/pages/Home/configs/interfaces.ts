export interface GameType {
  categories: string[];
  name: string;
  image: string;
  id: string;
}

export interface JackpotType {
  game: string;
  amount: number
}
