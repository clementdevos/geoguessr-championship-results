export interface GamerScore {
    total: number;
    rank: number;
    playerName: string;
    games: { [gameId: string]: number };
}
