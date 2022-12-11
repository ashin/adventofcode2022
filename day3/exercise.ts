import exerciseInput from './input';

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const getPriorityValue = (letter: string): number => priorities.indexOf(letter) + 1;
const NEW_LINE = '\n';

const addNums = (nums: number[]): number => nums.reduce((item, acc) => item + acc, 0);

const solution = (rucksacks: string): number => {
    const rucksackPriorityValue = rucksacks.split(NEW_LINE).map((rucksack) => {
        const compartmentSize = Math.floor(rucksack.length / 2);
        const secondCompartment = rucksack.split('');
        const firstCompartment = secondCompartment.splice(0, compartmentSize);
        const rucksackValues = firstCompartment.filter(letter => secondCompartment.indexOf(letter) > -1)
        return getPriorityValue(rucksackValues[0]);
    });

    return addNums(rucksackPriorityValue);
};

console.log(solution(exerciseInput));
