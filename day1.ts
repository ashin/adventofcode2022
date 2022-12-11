import fetchInput from './utils/fetchInput';

const exerciseInput = await fetchInput(1);
const NEW_LINE = '\n';
const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);

export const solution = (elvesList: string): number => {
    const totalCaloriesOfEachElf = elvesList
        .split(NEW_LINE + NEW_LINE)
        .map(elfList => elfList.split(NEW_LINE).map(Number))
        .map(addNums)
    return totalCaloriesOfEachElf.sort().pop() || 0;
};

solution(exerciseInput);