/**
 * Create an mapper function using arrow symantics that returns
 * an object having following attribute when operating on array
 */

const elementArr = [1, 2, 3];

let mapperFns = (ele) => ({isEven: (ele%2 === 0) ? true : false, number: ele, squared: ele*ele});

console.log(elementArr.map(mapperFns));