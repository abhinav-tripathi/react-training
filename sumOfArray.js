'use strict';

/*Exercise 2
*Return sum of array element using reduce and arrow function
*/ 
const arrNum = [1, 2, 3, 4];
const getSum = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrNum.reduce(getSum));
