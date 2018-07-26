/**
 * Create a factorial calculator
 */
const factorialNum = 5; 

let createFactorial = (num) => {
   if (num === 0) {
       return 1;
   } else {
       return num * createFactorial(num - 1);
   }
};

console.log(`Factorial of ${factorialNum} is = ${createFactorial(factorialNum)}`);