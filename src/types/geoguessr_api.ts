export interface Min {
    lat: number;
    lng: number;
}

export interface Max {
    lat: number;
    lng: number;
}

export interface Bounds {
    min: Min;
    max: Max;
}

export interface Round {
    lat: number;
    lng: number;
    panoId?: any;
    heading: number;
    pitch: number;
    zoom: number;
    countryCode?: any;
}

export interface TotalScore {
    amount: string;
    unit: string;
    percentage: number;
}

export interface Meters {
    amount: string;
    unit: string;
}

export interface Miles {
    amount: string;
    unit: string;
}

export interface TotalDistance {
    meters: Meters;
    miles: Miles;
}

export interface RoundScore {
    amount: string;
    unit: string;
    percentage: number;
}

export interface Meters2 {
    amount: string;
    unit: string;
}

export interface Miles2 {
    amount: string;
    unit: string;
}

export interface Distance {
    meters: Meters2;
    miles: Miles2;
}

export interface Guess {
    lat: number;
    lng: number;
    timedOut: boolean;
    timedOutWithGuess: boolean;
    roundScore: RoundScore;
    roundScoreInPercentage: number;
    roundScoreInPoints: number;
    distance: Distance;
    distanceInMeters: number;
    countryCode?: any;
    time: number;
}

export interface Pin {
    url: string;
    anchor: string;
    isDefault: boolean;
}

export interface Player {
    totalScore: TotalScore;
    totalDistance: TotalDistance;
    totalDistanceInMeters: number;
    totalTime: number;
    totalStreak: number;
    guesses: Guess[];
    isLeader: boolean;
    currentPosition: number;
    pin: Pin;
    newBadges: any[];
    explorer?: any;
    id: string;
    nick: string;
}

export interface Game {
    token: string;
    type: string;
    mode: string;
    state: string;
    roundCount: number;
    timeLimit: number;
    forbidMoving: boolean;
    forbidZooming: boolean;
    forbidRotating: boolean;
    map: string;
    mapName: string;
    panoramaProvider: number;
    bounds: Bounds;
    round: number;
    rounds: Round[];
    player: Player;
}

export interface GeoGuessrPlayerScore {
    gameToken: string;
    playerName: string;
    userId: string;
    totalScore: number;
    isLeader: boolean;
    pinUrl: string;
    game: Game;
}
