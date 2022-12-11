import exerciseInput from './input';

const NEW_LINE = '\n';
const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);

export const solution = (elvesList: string): number => {
    const totalCaloriesOfEachElf = elvesList
        .split(NEW_LINE + NEW_LINE)
        .map(elfList => elfList.split(NEW_LINE).map(Number))
        .map(addNums)
    return addNums(totalCaloriesOfEachElf.sort().slice(-3));
};

console.log(solution(exerciseInput));
