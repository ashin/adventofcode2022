import exerciseInput from './input';

const NEW_LINE = '\n';
const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);


// In how many assignment pairs does one range fully contain the other?
export const solution = (assignmentPairs: string): number => {
    return assignmentPairs
        .split(NEW_LINE)
        .map(assignmentPair => assignmentPair.split(',').map(assignment => assignment.split('-').map(Number)))
        .filter(assignmentPairs => {
            const [ first, second ] = assignmentPairs;
            return (first[0] <= second[0] && first[1] >= second[1])
             || (second[0] <= first[0] && second[1] >= first[1]);
        }).length;
};

console.log(solution(exerciseInput));
