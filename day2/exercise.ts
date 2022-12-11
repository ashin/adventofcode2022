import exerciseInput from './input';

const PAPER = 'paper';
const ROCK = 'rock';
const SCISSORS = 'scissors';

const SCORES = {
    'win': 6,
    'draw': 3,
    'lose': 0,
};

const MOVES = [
    {
        name: ROCK,
        enemy: 'A',
        player: 'X',
        score: 1,
        beats: SCISSORS,
    },
    {
        name: PAPER,
        enemy: 'B',
        player: 'Y',
        score: 2,
        beats: ROCK
    },
    {
        name: SCISSORS,
        enemy: 'C',
        player: 'Z',
        score: 3,
        beats: PAPER
    },
];

const getScore = (moves: string[]): number => {
    const enemyMove = MOVES.find(m => m.enemy === moves[0]);
    const playerMove = MOVES.find(m => m.player === moves[1]);
    let score = 0;
    
    if(!enemyMove || !playerMove || enemyMove.beats === playerMove.name) {
        score += SCORES.lose
    } else if(enemyMove.name === playerMove.name) {
        score += SCORES.draw;
    } else {
        score += SCORES.win;
    }

    console.log([enemyMove?.name, playerMove?.name, score, playerMove?.score].join(' ') + ' = ' + (score + (playerMove?.score || 0)));
    score += playerMove?.score || 0;
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
