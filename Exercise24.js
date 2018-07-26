/**
 * Create sum function for given scenarios
 * const numbers = [1,3,6,9];
 * const numbers2 = undefined;
 * const numbers3 = [1,3,undefined,6,9]
 */

const numbers = [1,3,6,10];
const numbers2 = undefined;
const numbers3 = [1,3,undefined,6,9];

let sum = (arr = [1,3,4,9]) => arr.reduce((acc=0, value=0) => acc + value);

console.log(sum(numbers3));