import exerciseInput from './input';

const NEW_LINE = '\n';

const buildRange = (range: number[]) : number[] => {
    const arr: number[] = [];
    for(let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }
    return arr;
}
// In how many assignment pairs do the ranges overlap?
export const solution = (assignmentPairs: string): number => {
    return assignmentPairs
        .split(NEW_LINE)
        .map(assignmentPair => assignmentPair.split(',').map(assignment => assignment.split('-').map(Number).sort()))
        .filter(assignmentPairs => {
            const [ first, second ] = assignmentPairs;
            const range = buildRange(first);
            return range.indexOf(second[0]) > -1 || range.indexOf(second[1]) > -1;
        }).length;
};

console.log(solution(exerciseInput));
