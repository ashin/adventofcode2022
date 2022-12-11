export default (day: number | string) : Promise<string> => fetch(`https://adventofcode.com/2022/day/${day}/input`)
    .then(r => r.json() || '');