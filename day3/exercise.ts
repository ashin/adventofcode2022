import exerciseInput from './input';

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const getPriorityValue = (letter: string): number => priorities.indexOf(letter) + 1;
const NEW_LINE = '\n';

const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);

const solution = (rucksacks: string): number => {
    const rucksackList = rucksacks.split(NEW_LINE);
    const rucksackGroups: string[][] = [];
    while(true) {
        const nextThree = rucksackList.splice(0, 3);
        rucksackGroups.push(nextThree);
        if(rucksackList.length < 3) { break; }
    }

    const rucksackGroupValues = rucksackGroups.map(rucksackGroup => {
        const inAllLetters = rucksackGroup[0].split('').find(letter => rucksackGroup[1].includes(letter) && rucksackGroup[2].includes(letter));
        return inAllLetters ? getPriorityValue(inAllLetters) : 0;
    });
    return addNums(rucksackGroupValues);
};

console.log(solution(exerciseInput));
