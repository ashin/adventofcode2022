import exerciseInput from './input';

const PAPER = 'paper';
const ROCK = 'rock';
const SCISSORS = 'scissors';

type scoresType = {
    [index: string]: number
};
const SCORES: scoresType = {
    'win': 6,
    'draw': 3,
    'lose': 0,
};
type instructionsType = {
    [index: string]: string
};
const instructions: instructionsType = {
    X: 'lose', 
    Y: 'draw',
    Z: 'win'
};

const MOVES = [
    {
        name: ROCK,
        enemy: 'A',
        score: 1,
        beats: SCISSORS,
    },
    {
        name: PAPER,
        enemy: 'B',
        score: 2,
        beats: ROCK
    },
    {
        name: SCISSORS,
        enemy: 'C',
        score: 3,
        beats: PAPER
    },
];

const getScore = (moves: string[]): number => {
    const enemyMove = MOVES.find(m => m.enemy === moves[0]);
    const instruction = instructions[moves[1]];
    
    let score = SCORES[instruction];
    
    if(!enemyMove || instruction === 'lose') {
        score += MOVES.find(m => m.name === enemyMove?.beats)?.score || 0;
    } else if(instruction === 'draw') {
        score += enemyMove.score;
    } else {
        score += MOVES.find(m => m.beats === enemyMove?.name)?.score || 0;
    }
    
    return score;
};

const NEW_LINE = '\n';
const SPACE = ' ';
const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);

const solution = (plays: string): number => {
    const scores = plays
        .split(NEW_LINE)
        .map(play => play.split(SPACE))
        .map(getScore)
    return addNums(scores);
};

console.log(solution(exerciseInput));
