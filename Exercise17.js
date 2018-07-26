/**
 * Swap two variables using one destructuring assignment
 */

let a = 2;
let b = 5;

[a] = [b, b=a];

console.log(a);
console.log(b);

// #TM: it would be simply [a,b] = [b,a]